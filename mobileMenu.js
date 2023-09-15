const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuOpen = document.querySelector(".burger-btn");
const mobileMenuClose = document.querySelector(".menu-close");

const togleMenu = () => mobileMenu.classList.toggle("is-open");

mobileMenuOpen.addEventListener("click", togleMenu);
mobileMenuClose.addEventListener("click", togleMenu);
