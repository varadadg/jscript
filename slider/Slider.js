let slides = document.getElementsByClassName("image");
let el = document.getElementsByClassName("btn");

var currentIndex = 0;
var newIndex = null;

// var slideElements = document.getElementsByClassName('slider_slide');
// var navElements = document.getElementsByClassName("slider_nav");

function navigateSlider() {
  slides[newIndex].style.display = "block";
  slides[currentIndex].style.display = "none";
  currentIndex = newIndex;
}

el[0] &&
  el[0].addEventListener("click", function () {
    newIndex--;
    navigateSlider();
  });

el[1] &&
  el[1].addEventListener("click", function () {
    newIndex++;
    navigateSlider();
  });
// button[0] &&
//   button[0].addEventListener("click", function () {
//     console.log("clicked");
//     slides[currentIndex].style.display = "none";
//     currentIndex--;
//     slides[currentIndex].style.display = "block";
//   });

// button[1] &&
//   button[1].addEventListener("click", function () {
//     slides[currentIndex].style.display = "none";
//     currentIndex++;
//     slides[currentIndex].style.display = "block";
//   });

let slideIndex = 0;

// function slideShow() {}
