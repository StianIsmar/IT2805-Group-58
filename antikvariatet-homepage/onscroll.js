/*function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context,args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context,args);
    };
};
let scrollPos = 0;
const article = document.querySelector('.about');

function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
        //Scroll up
        article.classList.add('is-hidden');
        article.classList.remove('is-visible');
    } else {
        //scrolldown
        article.classList.add('is-visible');
        article.classList.remove('is-hidden');
    }
    scrollPos = windowY;
}
window.addEventListener('scroll',debounce(checkPosition));*/

window.addEventListener("scroll", function () {displayAbout()});
function displayAbout() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("about").className = "fadeIn";
    } else {
        document.getElementById("about").className = "fadeOut";
    }
}