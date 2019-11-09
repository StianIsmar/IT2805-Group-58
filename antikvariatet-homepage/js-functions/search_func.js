const event_list = [
  {
    event: "CONCERT: Balkan party with Igor Dunder and the Fetterforeningen",
    tickets: true,
    date: "2019.12.02",
    time: "20:00",
    info: `It is so FUN that we end the fall season with Igor Dunder and the Cousins ​​Association! Balkanfest de lux! Igor and Fetterforeningen are a combination of good friends and professional musicians who are fond of Norwegian songs and skewed Balkan rhythms. On their albums you will find interpretations of songs such as Kråkevisa, Håvard Hedde and Gik me over sea and land, Ali baba lillelam, and much more. Igor and his cousins ​​take us through a landscape of Norwegian songs that have visited Good Morning Norway, NRK 1, 2 and 3 and most everything else. If they are in a good mood, there will be fast dancing and Balkan parties for hours. If they are in a less good mood, it can be slow and beautiful music and nostalgic melancholy for weeks. So get ready for a party night at the Antiquariat - here it will be stinn bracken! Price: 250, - kr`
  },
  {
    event: "QUIZ: Public Quiz",
    tickets: true,
    date: "2019.12.03",
    time: "18:00",
    info: `The Karlsen sisters invite to weekly general quiz in the book bar, with a solid bunch of questions in all categories. Bring 30 bucks in cash. Revenue goes to Life and Hope (lifeandhope.no).`
  },
  {
    event: "RELEASE CONCERT: Gunnhild Hasund",
    tickets: false,
    date: "2019.12.03",
    time: "21:00",
    info: `Gunnhild Hasund started writing songs at the age of 11. A natural songwriter who writes about what happens in her life at any given time. Unfiltered and raw. A great wonder about the world, his own emotional life and the social game was then the source of the lyrics. The message and the theme are enhanced by Gunnhild's beautiful voice that sounds from the innermost nooks and crannies of her soul, to the innermost nooks and crannies of the listeners' heart. This is vulnerable, this is beautiful, this is honest! Gunnhild prefers to create dark and melancholy ballads. Sometimes they are inspired by dreams she has had. Songs from the innermost part with the dream landscape's distortion of reality. The name Unwired refers to a feeling of being disconnected from one's own emotional life and body. The wires are simply not plugged in. Through the songwriting she feels whole again. October 31st releases the first part of the epn Unwired and 03 November you can join the release concert at Antikvariatet! <br> <br> Gunnhild with her: Lena S. Hanssen - 
        backup singer, <br> Ingeborg Brun - backup singer, <br> Gerardo de La Riva - Guitar, <br> Espen Warankov Godø - Piano.`
  },
  {
    event: "CONSERT: Malin Pettersen",
    tickets: true,
    date: "2019.12.04",
    time: "20:00",
    info: `Since releasing her first solo album last summer, Malin Pettersen has managed to win the Spellemann Prize, be nominated for the Music Prize in the USA and become a finalist in the International Songwriting Competition. After a very convincing showcase at Bylarm 2019 and a hectic festival summer, Malin embarks on the release of a new mini-album on October 11, which is followed by extensive touring in Norway and the USA. On November 4th, she visits Trondheim and the Antiquarium! Malin Pettersen got a head start on her music career when she, as a 17-year-old, participated in Idol in 2005, but over the past decade has evolved to become one of Norway's most important Americana names. She has appeared on releases for artists such as Amund Maarud (official site) and The Northern Belle, and had great success with her own band Lucky Lips which released 3 critically acclaimed albums. <br> Malin Pettersen has also become a well-known and beloved voice through the radio program "Kåbbåi" which, with its extended broadcast time on NRK P13, has given the Norwegian people deeper insight into the Country and the Americas world. Just before the summer we got a never-so-small taste of new music, with the single "Pause". After an honorable mention in The Rolling Stone Magazine, and upcoming plays at Americanafest in Nashville, it is clear that the international music scene has also caught the eye of Malin Pettersen! <br> <br>
        The doors open at 19:00. Concert start 20:00.`
  },
  {
    event: "Super Thursday! with IMPROschimpro",
    tickets: true,
    date: "2019.12.05",
    time: "19:00",
    info: `A dark and stormy Thursday evening at 20:00, There was an improvised scream ... Improper operators sneak into the bookstore of the Antiquarian on Thursday. They carry ax and black masks. Do you dare to come? You should look out for Ørjan, Steffen, Solrun, Janne and Lina the most. They will enchant their minds with completely improvised monologues and bloody toys. Fredrik is also there to summon dark forces behind the keys.
        <br>
        The gates open at 7pm. 100, - in the door in cash or per Vipps or souls.`
  },
  {
    event: "PODCAST: Headdress // Dangerous inequality",
    tickets: false,
    date: "2019.12.06",
    time: "18:00 - 19:30",
    info: `We have a thought in Norway about the welfare society that takes care of everyone, whether you are poor or rich, living in a city or village, small or large, male or female. But if you look at it more closely, this is not the case. In fact, it has a lot to say about who you are in terms of mortality, physical and mental illness, prospects for work and job satisfaction, etc. There is great inequality and great discrimination. And it's about to increase. Professor Terje A. Eikemo's research on the subject has received international attention and we will look into it tonight.`
  },
  {
    event: "Saturday on sunday!",
    tickets: false,
    date: "2019.12.08",
    time: "19:00",
    info: `Since 2013, Saturday on Sunday has been an institution in culture-Trondheim. After the Sunday concert, we open the stage for Creti and Pleti, giving everyone the opportunity to show off to a responsive audience. The antique variety offers piano, double bass, cajon, trumpet, guitar, banjo and lots of other instruments, as well as mouth-watering drinks. We run Saturday on Sunday every single week, whatever the weather!`
  }
];
for (i = 0; i < event_list.length; i++) {
  var node = document.createElement("li");

  var text = event_list[i].event + " - " + event_list[i].date;
  var textnode = document.createTextNode(text);
  node.appendChild(textnode);

  button = document.createElement("button");
  //button.style.left = "40%";

  button.setAttribute("onclick", `show_info(${i})`);
  button.style.display = "block";
  button.style.marginBottom = "20px";
  button.style.marginTop = "10px";

  button.style.width = "120px";
  button.style.height = "40px";
  button.style.backgroundColor = "#555555";
  button.innerHTML = "More info";
  button.style.color = "white";
  button.style.border = "none";
  button.style.marginLeft = "40%";

  var css = "table td:hover{ background-color: #00ff00 }";

  node.appendChild(button);

  node.id = i;
  document.getElementById("list").appendChild(node);
}

function show_info(e) {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  document.getElementById("close").onclick = function() {
    modal.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  document.getElementById("merinfo").textContent =
    "More information about " + event_list[e].event;
  document.getElementById("span_tickets").innerHTML =
    "Avaliable tickets: " + event_list[e].tickets;
  document.getElementById("span_time").innerHTML =
    "The event starts at: " + event_list[e].time;
  document.getElementById("span_date").innerHTML =
    "Date: " + event_list[e].date;
  document.getElementById("span_info").innerHTML = event_list[e].info;

  if (event_list[e].tickets === true) {
    document.getElementById("span_tickets").style.color = "green";
    document.getElementById("span_button").innerHTML = "Register for event";
    document.getElementById("span_button").style.background = "green";
    document.getElementById("span_button").disabled = false;
  } else {
    document.getElementById("span_tickets").style.color = "red";
    document.getElementById("span_button").innerHTML = "Sold out";
    document.getElementById("span_button").style.background = "lightgrey";
    document.getElementById("span_button").disabled = true;
  }
}
function button_click() {
  alert("You are registered for the event!");
  document.getElementById("span_button").style.background = "orange";
  document.getElementById("span_button").innerHTML = "You are registered!";
}

function filter_search(e) {
  var title = document.getElementById("list").childNodes;
  console.log(title);
  for (i = 1; i < title.length; i++) {
    if (
      !String(title[i].innerText)
        .toLowerCase()
        .includes(e)
    ) {
      title[i].style.display = "none";
    } else {
      title[i].style.display = "inherit";
    }
  }
}
