// Script that changes reCAPTCHA theme to dark by injecting data-theme attribute as dark
document.addEventListener("DOMContentLoaded", (event) => {
  const recaptcha = document.querySelector(".g-recaptcha");
  recaptcha.setAttribute("data-theme", "dark");
});
