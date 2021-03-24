'use strict';

const navbar = document.querySelector('.navbar');
const NAVBAR_CLASS_CLOSED = 'navbar--closed';

const navbarBtn = document.querySelector('.navbar-header__btn');

const navbarArrowBtn = document.querySelector('.navbar-btn__arrow');
const NAVBAR_ARROW_CLASS_CLOSED = 'navbar-btn__arrow--closed';

const navbarBurgerBtn = document.querySelector('.navbar-btn__burger');
const NAVBAR_BURGER_CLASS_CLOSED = 'navbar-btn__burger--closed';

// инициализация navbar - меню тестов
function initNavbarBtn() {
  if (navbar) {
    // FIXME activate the line
    // navbar.classList.toggle(NAVBAR_CLASS_CLOSED);
  }

  // FIXME activate the line
  // switchBtnIcon();

  if (navbarBtn) {
    navbarBtn.addEventListener('click', navbarBtnClickHandler);
  }
}

function navbarBtnClickHandler() {
  navbar.classList.toggle(NAVBAR_CLASS_CLOSED);
  switchBtnIcon();
}

// переключение иконки на кнопке открытия меню тестов
function switchBtnIcon() {
  if (navbarArrowBtn && navbarBurgerBtn) {
    navbarArrowBtn.classList.toggle(NAVBAR_ARROW_CLASS_CLOSED);
    navbarBurgerBtn.classList.toggle(NAVBAR_BURGER_CLASS_CLOSED);
  }
}

initNavbarBtn();
