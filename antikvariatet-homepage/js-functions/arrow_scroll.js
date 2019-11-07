function getAbout() {
    let headerheight = document.getElementById("header").offsetHeight;
    window.scrollTo(0,headerheight);
    document.getElementById("about").className = "fadeIn";
}