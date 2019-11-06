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
    window.scrollTo(0,200);
    document.getElementById("about").className = "fadeIn";
}