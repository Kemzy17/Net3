var contents = document.querySelectorAll(".second-sec .content");

window.addEventListener("load", () => {

  contents.forEach(function (cont) {
    cont.style.opacity = "1";
    cont.classList.add("contentup");
  });
});

var nav_links = document.getElementById("nav-links");
function opennav() {
  nav_links.classList.add("show");
}
function closenav() {
  nav_links.classList.remove("show");
}
var typed = new Typed("#element", {
  strings: [
    "MAKE WORKFLOWS MORE EFFICIENT.^4000",
    "EMPOWER YOUR BUSINESS.^4000",
    "YOU CAN COUNT ON.^4000",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  smartBackspace: true, // Default value
  cursorChar: "|",
});

var header = document.querySelector("header");
var nav = document.querySelector("nav");
var head = document.querySelector(".head");
var color_change = document.querySelectorAll("nav a");
var icons = document.querySelectorAll(".head-icons i");
var logo = document.getElementById("logo-in");
var openav = document.getElementById("opennav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 1) {
    logo.style.zIndex = "2";
    nav.style.background = "white";
    nav.style.transitionDelay = "0.1s";
    head.style.background = "#0c5493";
    header.style.boxShadow = "0px 0px 10px 3px #555";

    color_change.forEach(function (link) {
      link.style.color = "#0c5493";
    });

    openav.style.color = "black";

  } else {
    logo.style.zIndex = "-2";

    nav.style.background = "none";

    header.style.boxShadow = "";

    color_change.forEach(function (link) {
      link.style.color = "";
    });

    head.style.background = "";
    openav.style.color = "";
  }
});

var headerLayer = document.getElementById("parallax-layer");
var fifth = document.getElementById("fifth");
var sixth = document.getElementById("sixth");

window.addEventListener("scroll", function () {
  var scrollPosition = window.pageYOffset;
  var speed = -5; // Adjust this value to control the scrolling speed of the header background

  var yPos = -scrollPosition / speed;
  headerLayer.style.backgroundPositionY = yPos + "px";
  fifth.style.backgroundPositionY = yPos + "px";
  sixth.style.backgroundPositionY = yPos + "px";
});

// var fifth = document.getElementById("fifth");

// window.addEventListener("scroll", function () {
//   var scrollPosition = window.pageYOffset;
//   var speed = -5; // Adjust this value to control the scrolling speed of the header background

//   var yPos = -scrollPosition / speed;
//   fifth.style.backgroundPositionY = yPos + "px";
// });

// var fifth = document.getElementById("fifth");

// window.addEventListener("scroll", function () {
//   var scrollPosition = window.pageYOffset;
//   var speed = -5; // Adjust this value to control the scrolling speed of the header background

//   var yPos = -scrollPosition / speed;
//   fifth.style.backgroundPositionY = yPos + "px";
// });

const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});
