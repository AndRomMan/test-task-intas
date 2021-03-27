/* eslint-disable no-console */
'use strict';

let navbar = document.querySelector('.navbar');
let NAVBAR_CLASS_CLOSED = 'navbar--closed';

let navbarHeaderBtn = document.querySelector('.navbar-header__button');

let navbarArrowBtn = document.querySelector('.navbar-button__arrow');
let NAVBAR_ARROW_CLASS_CLOSED = 'navbar-button__arrow--closed';

let navbarBurgerBtn = document.querySelector('.navbar-button__burger');
let NAVBAR_BURGER_CLASS_CLOSED = 'navbar-button__burger--closed';

let navbarTestBtns = document.querySelectorAll('.navbar-list__button');

const ID_1 = 'test-1';
const ID_2 = 'test-2';
const ID_3 = 'test-3';
const ID_4 = 'test-4';

initNavbar();

// инициализация navbar - меню тестов
function initNavbar() {
  if (navbar) {
    navbar.classList.toggle(NAVBAR_CLASS_CLOSED);
  }

  switchIconOfNavbarHeaderBtn();
  initNavbarTestBtns();
  serverAjaxRequest();

  if (navbarHeaderBtn) {
    navbarHeaderBtn.addEventListener('click', navbarBtnClickHandler);
  }
}

// инициализация кнопок выбора теста
function initNavbarTestBtns() {
  if (navbarTestBtns) {
    navbarTestBtns.forEach((element) => {
      element.addEventListener('click', navbarTestBtnClickHandler);
    });
  }
}

function stopInitNavbarTestBtns() {
  if (navbarTestBtns) {
    navbarTestBtns.forEach((element) => {
      element.removeEventListener('click', navbarTestBtnClickHandler);
    });
  }
}

function navbarTestBtnClickHandler(evt) {
  let targetBtn = evt.target;
  let testId = targetBtn.id;
  let testDescription;

  if (testId === ID_1) {
    testDescription = jsonTestData[0].description;
  } else if (testId === ID_2) {
    testDescription = jsonTestData[1].description;
  } else if (testId === ID_3) {
    testDescription = jsonTestData[2].description;
  } else if (testId === ID_4) {
    testDescription = jsonTestData[3].description;
  }

  setTestDescriptionText(testDescription);
  openDescription();
}

function navbarBtnClickHandler() {
  navbar.classList.toggle(NAVBAR_CLASS_CLOSED);
  switchIconOfNavbarHeaderBtn();
}

// переключение иконки на кнопке открытия меню тестов
function switchIconOfNavbarHeaderBtn() {
  if (navbarArrowBtn && navbarBurgerBtn) {
    navbarArrowBtn.classList.toggle(NAVBAR_ARROW_CLASS_CLOSED);
    navbarBurgerBtn.classList.toggle(NAVBAR_BURGER_CLASS_CLOSED);
  }
}
