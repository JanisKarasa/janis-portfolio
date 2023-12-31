// Script that changes reCAPTCHA theme to dark by injecting data-theme attribute as dark
document.addEventListener("DOMContentLoaded", (event) => {
  const recaptcha = document.querySelector(".g-recaptcha");
  recaptcha.setAttribute("data-theme", "dark");
});

// AOS
// Initializing AOS - Animation On Scroll library. More info on their website - documentation
AOS.init({
  // offset - 200 for the scroll - 200px down from the top then animation will start (offset for anchorPlacement: 'top-bottom')
  offset: 200,
  // delay - 100 for the animation
  delay: 100,
  // duration - for animation - 400
  duration: 400,
  easing: "ease",
  // once - false means that animation will not happen once but as many times as we scroll back and forth
  once: "false",
  mirror: false,
  // anchorPlacement means when/where the animation starts - whenever elements 'top' and the viewpoint 'bottom' (screen bottom) will meet then the animation will start.
  anchorPlacement: "top-bottom",
});
// !!! NOW ADD SOME ATTRIBUTES to Sections you want to animate

// Logic of Modal that asks to allow some time for the website to load.
const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");
const modalViewProjectLink = document.querySelector(".view__project__modal__link")
openButton.addEventListener("click", () => {
  modal.showModal(); // Opens a modal
});
closeButton.addEventListener("click", () => {
  modal.close(); // Opens a modal
});
modalViewProjectLink.addEventListener("click", () => {
  modal.close(); // Opens a modal
});

// Logic that closes modal on outside click
modal.addEventListener("click", e => {
  const dialogDimensions = modal.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modal.close()
  }
})