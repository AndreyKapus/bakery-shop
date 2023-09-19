const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuOpen = document.querySelector(".burger-btn");
const mobileMenuClose = document.querySelector(".menu-close");
const mobileMenuLink = document.querySelector(".menu-nav-list");
const bodyEl = document.querySelector("body");

const togleMenu = () => {
  mobileMenu.classList.toggle("is-open");
  if (mobileMenu.classList.contains("is-open")) {
    bodyEl.classList.add("stopBodyScroll");
  }
  if (!mobileMenu.classList.contains("is-open")) {
    bodyEl.classList.remove("stopBodyScroll");
  }
};

mobileMenuOpen.addEventListener("click", togleMenu);
mobileMenuClose.addEventListener("click", togleMenu);
mobileMenuLink.addEventListener("click", togleMenu);
