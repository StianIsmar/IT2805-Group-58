onload = () => {
  // Modular header. Includes NavBar
  document.getElementById("header").innerHTML =
    "<h1>ANTIKVARIATET</h1>" +
    '<div id="nav">' +
    '<a id="AK" href="Homepage.html">AK</a>' +
    '<a id="Events" href="Events.html">Events</a>' +
    '<a id="Restaurant" href="Restaurant.html">Restaurant</a>' +
    '<a id="Contact" href="Contact.html">Contact</a>' +
    "</div>" +
    '<span id="arrow_button"></span>';

  // Get underline on current page in navbar
  var title = document.title;
  var underlineNav = document.getElementById(title);
  underlineNav.className = "active";
  console.log(underlineNav.id);
  if (underlineNav.id == "Events") {
    header.style.backgroundImage = "url('img/eventos3.jpeg')";
  } else if (underlineNav.id == "Restaurant") {
    header.style.backgroundImage = "url('img/room6.jpeg')";
  } else if (underlineNav.id == "Contact") {
    header.style.backgroundImage = "url('img/gitar2.jpeg')";
  }

  // Modular footer
  document.getElementById("footer").innerHTML =
    "<div>" +
    "<footer>" +
    '<div class="left">' +
    '<div class = "contact-us">' +
    "<div>+47 43561950</div>" +
    "<div>anti@kvariatet.no</div>" +
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
};
