/* const headerEl = document.querySelector("header");

window.addEventListener("scroll", addShadow);

function addShadow() {
  if (window.scrollY >= 75) {
    headerEl.classList.add("header-shadow");
  } 
  else {
    headerEl.classList.remove("header-shadow");
  }
}
 */
const navBar = document.querySelector("nav");

const navToggle = document
  .getElementById("navActive")
  .addEventListener("click", () => {
    navBar.classList.add("navActive");
  });

navClose = document.getElementById("navClose").addEventListener("click", () => {
  navBar.classList.remove("navActive");
});

////nav links

const navLinkEl = document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    navBar.classList.remove("navActive");
  })
);

//footer year
dateEL = document.getElementById("date");

const current = new Date();
dateEL.textContent = current.getFullYear();

//show top button
/* 
topbtnEl = document.querySelector(".top-btn");

window.addEventListener("scroll", showTop);

function showTop() {
  if (window.scrollY >= 75) {
    topbtnEl.classList.add("show-btn");
  } else {
    topbtnEl.classList.remove("show-btn");
  }
}
 */

// Swiper JS
/* 
const swiper = new Swiper(".swiper", {
  // Optional parameters
  grabCursor: true,
  loop: true,
  spaceBetween: 35,
  clickable: true,

  // media breakpoint
  breakpoints: {
    1120: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
 */

//// Swiper Functions

const swiper = new Swiper(".right-gallery", {
  loop: false,
  grabCursor: true,
  spaceBetween: 16,
  slidesPerView: 2,


  breakpoints: {
    1200: {
      slidesPerView: 2.3,
    },

    600: {
      slidesPerView: 1.5,
    },

    200:{
slidesPerView: 1.3,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
