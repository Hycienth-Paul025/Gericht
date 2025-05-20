/* const igLogo = document.getElementById("ig-logo");
const imageEl = document.querySelectorAll(".bg-image");
const bgCont = document.querySelector(".bg-container");
 */
/* bgCont.addEventListener("click", showIcon());
 
function showIcon(){
    bgCont.forEach(image => {
        imageEl.addEventListener("click", ()=> {
            image.style.display = "none"
        })
    });
} */

const navBar = document.querySelector("nav");

const navToggle = document
  .getElementById("navActive")
  .addEventListener("click", () => {
    navBar.classList.add("navActive");
  });

navClose = document.getElementById("navClose").addEventListener("click", () => {
  navBar.classList.remove("navActive");
});


//footer year
dateEL = document.getElementById("date");

const current = new Date();
dateEL.textContent = current.getFullYear();

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
