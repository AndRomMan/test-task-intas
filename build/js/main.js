'use strict';

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
'use strict';

var navbar = document.querySelector('.navbar');
var NAVBAR_CLASS_CLOSED = 'navbar--closed';
var navbarBtn = document.querySelector('.navbar-header__btn');
var navbarArrowBtn = document.querySelector('.navbar-btn__arrow');
var NAVBAR_ARROW_CLASS_CLOSED = 'navbar-btn__arrow--closed';
var navbarBurgerBtn = document.querySelector('.navbar-btn__burger');
var NAVBAR_BURGER_CLASS_CLOSED = 'navbar-btn__burger--closed';

function initNavbarBtn() {
  if (navbar) {}

  if (navbarBtn) {
    navbarBtn.addEventListener('click', navbarBtnClickHandler);
  }
}

function navbarBtnClickHandler() {
  navbar.classList.toggle(NAVBAR_CLASS_CLOSED);
  switchBtnIcon();
}

function switchBtnIcon() {
  if (navbarArrowBtn && navbarBurgerBtn) {
    navbarArrowBtn.classList.toggle(NAVBAR_ARROW_CLASS_CLOSED);
    navbarBurgerBtn.classList.toggle(NAVBAR_BURGER_CLASS_CLOSED);
  }
}

initNavbarBtn();
//# sourceMappingURL=main.js.map
