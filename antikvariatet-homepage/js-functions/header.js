onload = () => {
  // Modular header. Includes NavBar
  document.getElementById("header").innerHTML =
    '<h1 id="ak-heading">ANTIKVARIATET</h1>' +
    '<div id="nav">' +
        '<a id="AK" href="Homepage.html">AK</a>'+
        '<a id="Events" href="Events.html">Events</a>'+
        '<a id="Restaurant" href="Restaurant.html">Restaurant</a>'+
        '<a id="Contact" href="Contact.html">Contact</a>'+
    '</div>';

  // Get underline on current page in navbar
  var title = document.title;
  var underlineNav = document.getElementById(title);
  underlineNav.className = "active";
  console.log(underlineNav.id);
  if (underlineNav.id == "Events") {
    header.style.backgroundImage = "url('img/eventos3.jpeg')";
  } else if (underlineNav.id == "Restaurant") {
    header.style.backgroundImage = "url('img/cafe.jpg')";
  } else if (underlineNav.id == "Contact") {
    header.style.backgroundImage = "url('img/gitar2.jpeg')";
  } else if (underlineNav.id == "AK") {
    header.style.backgroundImage = "url('img/eventos3.jpeg')";
    header.style.animation = "fadeEffect 3s";
  }
}