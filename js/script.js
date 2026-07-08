const burgerButton = document.getElementById("burger-button");
const closeButton = document.getElementById("close-button");
const navList = document.querySelector(".nav-list");

burgerButton.addEventListener("click", () => {
  navList.classList.add("active");
  burgerButton.style.display = "none";
  closeButton.style.display = "block";
});

closeButton.addEventListener("click", () => {
  navList.classList.remove("active");
  closeButton.style.display = "none";
  burgerButton.style.display = "block";
});
