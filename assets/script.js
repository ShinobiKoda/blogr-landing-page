const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav-links");
const title_links = document.querySelectorAll(".link-title");
const desktop_nav_links = document.querySelectorAll(
  ".desktop-sub-link-heading"
);

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

desktop_nav_links.forEach((link) => {
  link.addEventListener("click", () => {
    const sub_link = link.nextElementSibling;
    const arrow_img = link.querySelector(".desktop-arrow-img");

    //Hide all sub links and reset all arrows
    document.querySelectorAll(".desktop-nav-sub-link").forEach((link) => {
      if (link != sub_link) {
        link.classList.remove("show-desktop");
      }
    });
    document.querySelectorAll(".desktop-arrow-img").forEach((img) => {
      if (img != arrow_img) {
        img.classList.remove("desktop-rotate");
      }
    });

    sub_link.classList.toggle("show-desktop");
    arrow_img.classList.toggle("desktop-rotate");
  });
});
