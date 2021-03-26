'use strict';
"use strict";
'use strict';

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
'use strict';

var navbar = document.querySelector('.navbar');
var NAVBAR_CLASS_CLOSED = 'navbar--closed';
var navbarHeaderBtn = document.querySelector('.navbar-header__button');
var navbarArrowBtn = document.querySelector('.navbar-button__arrow');
var NAVBAR_ARROW_CLASS_CLOSED = 'navbar-button__arrow--closed';
var navbarBurgerBtn = document.querySelector('.navbar-button__burger');
var NAVBAR_BURGER_CLASS_CLOSED = 'navbar-button__burger--closed';
var navbarTestBtns = document.querySelectorAll('.navbar-list__button');
var ID_1 = 'test-1';
var ID_2 = 'test-2';
var ID_3 = 'test-3';
var ID_4 = 'test-4';
var ID_5 = 'test-5';
initNavbar();

function initNavbar() {
  if (navbar) {
    navbar.classList.toggle(NAVBAR_CLASS_CLOSED);
  }

  switchIconOfNavbarHeaderBtn();
  navbarTestBtnsInit();
  serverAjaxRequest();

  if (navbarHeaderBtn) {
    navbarHeaderBtn.addEventListener('click', navbarBtnClickHandler);
  }
}

function navbarTestBtnsInit() {
  if (navbarTestBtns) {
    navbarTestBtns.forEach(function (element) {
      element.addEventListener('click', navbarTestBtnClickHandler);
    });
  }
}

function navbarTestBtnClickHandler(evt) {
  var testId = evt.target.id;

  if (testId === ID_1) {
    console.log(jsonTestData[0].name);
  } else if (testId === ID_2) {
    console.log(jsonTestData[1].name);
  } else if (testId === ID_3) {
    console.log(jsonTestData[2].name);
  } else if (testId === ID_4) {
    console.log(jsonTestData[3].name);
  } else if (testId === ID_5) {
    console.log(jsonTestData[4].name);
  }
}

function navbarBtnClickHandler(evt) {
  console.log(evt.type);
  navbar.classList.toggle(NAVBAR_CLASS_CLOSED);
  switchIconOfNavbarHeaderBtn();
}

function switchIconOfNavbarHeaderBtn() {
  if (navbarArrowBtn && navbarBurgerBtn) {
    navbarArrowBtn.classList.toggle(NAVBAR_ARROW_CLASS_CLOSED);
    navbarBurgerBtn.classList.toggle(NAVBAR_BURGER_CLASS_CLOSED);
  }
}
'use strict';

var jsonTestData;

function serverAjaxRequest() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://intas-site/test_data.php');
  request.send();
  request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status === 200) {
      jsonTestData = JSON.parse(request.response);
      setTestFields();
    }
  });
}

function setTestFields() {
  setTestName();
}

function setTestName() {
  if (navbarTestBtns) {
    for (var i = 0; i < navbarTestBtns.length; i++) {
      console.log(navbarTestBtns[i].textContent);
      navbarTestBtns[i].textContent = jsonTestData[i].name;
    }
  }
}
//# sourceMappingURL=main.js.map
