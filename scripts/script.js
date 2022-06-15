const header = document.getElementById("header");
const headerMenu = document.querySelector(".header-menu");
const menuBackButton = document.querySelector(".main-menu__header-button");
const menuPrimebutton = document.querySelector(".link-prime");

function showMenu() {
  const coords = header.getBoundingClientRect();
  const menu = document.getElementById("menu");
  if (coords.bottom < 0) {
    menu.classList.remove("invisible");
  } else {
    menu.classList.add("invisible");
  }
}

function openMenu() {
  const mainMenu = document.querySelector(".main-menu");
  mainMenu.classList.remove("toRight");
}

function closeMenu() {
  const mainMenu = document.querySelector(".main-menu");
  mainMenu.classList.add("toRight");
}

document.addEventListener("scroll", showMenu);
headerMenu.addEventListener("click", openMenu);
menuPrimebutton.addEventListener("click", openMenu);
menuBackButton.addEventListener("click", closeMenu);
