'use strict';

/*--------------------- Selecting elements ---------------------*/
const header = document.querySelector(".header");

/*------------------------ Modal window ------------------------*/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener('click', openModal);
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/*--------------------------------------------------------------*/

/*---------------------- Cookies Message -----------------------*/
const message = document.createElement("div");
message.classList.add("cookie-message"); 
message.innerHTML = `We use Cookies to improve functionality and for web analytics <button class="btn btn--close-cookie">Got it!</button>`;
message.setAttribute("open", "");

header.before(message);

// to fade-out before closing the element
message.addEventListener("click", () => {
  message.style.animation = "fade-out 0.5s";
  message.addEventListener("animationend", () => {
    message.remove();
  }, {once: true})
})

/*--------------------------------------------------------------*/

/*---- Delete Elements ----*/
function deleteElement(element) {
  element.addEventListener("click", () => {
    element.remove();
  })
}
/*-------------------------*/