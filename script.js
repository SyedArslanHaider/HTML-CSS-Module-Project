const burgerButton = document.getElementById("burger-button");
const nav = document.querySelector(".nav-header");
const body = document.querySelector("body");
const burgerIcon = document.querySelector(".burger-icon");

burgerButton.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    body.style.overflow = "hidden";
    burgerIcon.innerHTML = "&#10006;"; // Close icon
  } else {
    body.style.overflow = "auto";
    burgerIcon.innerHTML = "&#9776;"; // Burger icon
  }
});