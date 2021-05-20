const btnIcon = document.querySelector(".btn__active");
const sideBar = document.querySelector(".sidebar");

btnIcon.addEventListener("click", () => {
  sideBar.classList.toggle("active")
});