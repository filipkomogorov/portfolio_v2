const hamburgerBtn = document.querySelector("#hamburgerBtn");
const nav = document.querySelector("nav");
hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("addNav");
  hamburgerBtn.classList.toggle("btn-animation");
});
