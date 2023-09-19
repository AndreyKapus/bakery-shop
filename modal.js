const modal = document.querySelector(".backdrop");
const modalOpenBtn = document.getElementById("order-btn-header");
const heroModalOpenBtn = document.getElementById("order-btn-hero");
const modalCloseBtn = document.querySelector(".modal-btn-close");

const togleModal = () => modal.classList.toggle("is-hidden");

modalOpenBtn.addEventListener("click", togleModal);
modalCloseBtn.addEventListener("click", togleModal);
heroModalOpenBtn.addEventListener("click", togleModal);
