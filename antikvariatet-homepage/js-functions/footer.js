// Modular footer
window.addEventListener("load", function() {
  loadingFooter();
});

function loadingFooter() {
  document.getElementById("footer").innerHTML =
    "<div>" +
    "<footer>" +
    '<div class="left">' +
    '<div class = "contact-us">' +
    "<div>+47 47917339</div>" +
    "<div>antikk.booking@gmail.com</div>" +
    "</div>" +
    '<div class = "social-media">' +
    '<a href="https://www.facebook.com">' +
    '<i id = "facebook" class="fa fa-facebook-square" aria-hidden="true"></i>' +
    "</a>" +
    '<a href="https://www.instagram.com">' +
    '<i id = "instagram" class="fa fa-instagram" aria-hidden="true"></i>' +
    "</a>" +
    '<a href="https://www.twitter.com">' +
    '<i id = "twitter" class="fa fa-twitter-square" aria-hidden="true"></i>' +
    "</a>" +
    "</div>" +
    "</div>" +
    '<div class="right">' +
    '<iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=Nedre%20Bakklandet%204+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/coordinates.html">latitude longitude finder</a></iframe></div><br />' +
    "<br/>" +
    "</div>" +
    "</footer>" +
    "</div>";
}
