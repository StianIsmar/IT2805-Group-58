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
  if (underlineNav.id == 'Events') {
    header.style.backgroundImage = "url('img/eventos3.jpeg')";
  } else if (underlineNav.id == 'Restaurant'){
    header.style.backgroundImage = "url('img/room8.jpeg')";
  }else if (underlineNav.id == 'Contact'){
    header.style.backgroundImage = "url('img/gitar2.jpeg')";
  }

  // Modular footer
  document.getElementById("footer").innerHTML =
    '<div>' +
      '<footer>'+
        '<div class="left"></div>'+
        '<div class="right">'+
          '<div style="width: 720px">'+
            '<iframe width="720" height="400"'+
            'src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;'+
            'q=Nedre%20Bakklandet%204%2C%207014%20Trondheim+(Antikvariatet)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed" '+
            'frameborder="0"scrolling="no" marginheight="0" marginwidth="0">'+
              '<a href="https://www.maps.ie/coordinates.html">gps coordinates</a>'+
            '</iframe>'+
          '</div>'+
          '<br/>'+
        '</div>'+
      '</footer>'+
    '</div>';
    
  };
