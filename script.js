"use strict";

const openMenu = document.getElementById("iconMenu");
const navItems = document.querySelector(".navbar-links");
const menuLinks = document.getElementById("menu-links");

openMenu.addEventListener("click", () => {
  navItems.classList.toggle("hidden");
  menuLinks.classList.toggle("menu");

  if (navItems.classList.contains("hidden")) {
    openMenu.src = "./assets/images/icon-menu-close.svg";
    

  } else {
    
    openMenu.src = "./assets/images/icon-menu.svg";
    
  }
});
