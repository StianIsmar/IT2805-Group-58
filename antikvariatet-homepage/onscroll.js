window.addEventListener("scroll", function () {displayOnScroll()});
function displayOnScroll() {
    let about = document.getElementById("about").className;
    if (about != "fadeIn") {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("about").className = "fadeIn";
        } else {
            document.getElementById("about").className = "fadeOut";
        }
    }
}

function getAbout() {
    let headerheight = document.getElementById("header").offsetHeight;
    window.scrollTo(0,headerheight);
    document.getElementById("about").className = "fadeIn";
}