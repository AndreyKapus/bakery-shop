const modal = document.querySelector(".backdrop");
const modalOpenBtn = document.querySelector(".order-button");
const modalCloseBtn = document.querySelector(".modal-btn-close");

const togleModal = () => modal.classList.toggle("is-hidden");

modalOpenBtn.addEventListener("click", togleModal);
modalCloseBtn.addEventListener("click", togleModal);
