let hamburger = document.querySelector(".hamburger");
let navSec = document.querySelector(".nav_section");

hamburger.addEventListener("click", function () {
  navSec.classList.toggle("show");
});
