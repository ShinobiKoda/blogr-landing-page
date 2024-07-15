const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav-links");
const title_links = document.querySelectorAll(".link-title");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav_links.classList.toggle("active");
});

title_links.forEach((title) => {
  title.addEventListener("click", () => {
    const sub_link = title.nextElementSibling;
    const arrow_img = title.querySelector(".arrow-img");

    // Hide all sub-links and reset all arrows
    document.querySelectorAll(".sub-links").forEach((link) => {
      if (link !== sub_link) {
        link.classList.remove("show");
      }
    });
    document.querySelectorAll(".arrow-img").forEach((img) => {
      if (img !== arrow_img) {
        img.classList.remove("rotate");
      }
    });

    // Toggle the clicked sub-link and arrow
    sub_link.classList.toggle("show");
    arrow_img.classList.toggle("rotate");
  });
});
