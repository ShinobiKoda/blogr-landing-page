const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav-links");
const connect_title = document.querySelector(".connect-title");
const connect_links = document.querySelector(".connect-links");
const arrow_img = document.querySelector(".arrow-img");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav_links.classList.toggle("active");
});

connect_title.addEventListener("click", () => {
  connect_links.classList.toggle("show");
  arrow_img.classList.toggle("rotate");
});
