'use strict';

var descriptionField = document.querySelector('.test-description__text');
var testDescriptionSection = document.querySelector('.test-description');
var testStartBtn = document.querySelector('.test-description__start');
var testEscapeBtn = document.querySelector('.test-description__escape');
var DESCRIPTION_SECTION_CLASS_CLOSED = 'test-description--closed';

function setTestDescriptionText(content) {
  if (descriptionField) {
    descriptionField.textContent = content;
  }

  initDescriptionSectionBtns();
}

function initDescriptionSectionBtns() {
  if (testStartBtn) {
    testStartBtn.addEventListener('click', testStartBtnClickHandler);
  }

  if (testEscapeBtn) {
    testEscapeBtn.addEventListener('click', testEscapeBtnClickHandler);
  }
}

function stopInitDescriptionSectionBtns() {
  if (testStartBtn) {
    testStartBtn.removeEventListener('click', testStartBtnClickHandler);
  }

  if (testEscapeBtn) {
    testEscapeBtn.removeEventListener('click', testEscapeBtnClickHandler);
  }
}

function testStartBtnClickHandler(evt) {
  console.log(evt.type);
  clearTestResult();
  closeDescription();
  openCurrentTest();
}

function testEscapeBtnClickHandler() {
  closeDescription();
  stopInitDescriptionSectionBtns();
}

function openDescription() {
  openTestDescriptionSection();
  openTestHeaderWrapper();
  openDescriptionTestHeader();
  closeCurrentTestHeader();
  closePromptSection();
}

function closeDescription() {
  closeTestDescriptionSection();
  closeTestHeaderWrapper();
  closeDescriptionTestHeader();
  openPromptSection();
}

function openCurrentTest() {
  stopInitNavbarTestBtns();
  openTestHeaderWrapper();
  openCurrentTestHeader();
  openTestFieldSection();
  closePromptSection();
  initOutBtn();
  initCompleteBtn();
}

function closeCurrentTest() {
  initNavbarTestBtns();
  closeTestHeaderWrapper();
  closeCurrentTestHeader();
  closeTestFieldSection();
  openPromptSection();
  stopInitOutBtn();
  stopInitCompleteBtn();
}

function openTestDescriptionSection() {
  openBlock(testDescriptionSection, DESCRIPTION_SECTION_CLASS_CLOSED);
}

function closeTestDescriptionSection() {
  closeBlock(testDescriptionSection, DESCRIPTION_SECTION_CLASS_CLOSED);
}
'use strict';

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function openBlock(block, closedClass) {
  if (block.classList.contains(closedClass)) {
    block.classList.remove(closedClass);
  }
}

function closeBlock(block, closedClass) {
  if (block.classList.contains(closedClass)) {
    return;
  } else {
    block.classList.add(closedClass);
  }
}
'use strict';

var modal = document.querySelector('.modal');
var modalExitBtn = document.querySelector('.modal__exit-button');
var modalEscapeBtn = document.querySelector('.modal__escape-button');
var MODAL_CLASS_CLOSED = 'modal--closed';

function openModal() {
  openBlock(modal, MODAL_CLASS_CLOSED);
  initModalButtons();
}

function closeModal() {
  closeBlock(modal, MODAL_CLASS_CLOSED);
  stopInitModalButtons();
}

function initModalButtons() {
  if (modalExitBtn) {
    modalExitBtn.addEventListener('click', modalExitBtnClickHandler);
  }

  if (modalEscapeBtn) {
    modalEscapeBtn.addEventListener('click', modalEscapeBtnClickHandler);
  }
}

function stopInitModalButtons() {
  modalExitBtn.removeEventListener('click', modalExitBtnClickHandler);
  modalEscapeBtn.removeEventListener('click', modalEscapeBtnClickHandler);
}

function modalExitBtnClickHandler() {
  closeModal();
  closeCurrentTest();
  stopInitModalButtons();
}

function modalEscapeBtnClickHandler() {
  closeModal();
  stopInitModalButtons();
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
initNavbar();

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

function initNavbarTestBtns() {
  if (navbarTestBtns) {
    navbarTestBtns.forEach(function (element) {
      element.addEventListener('click', navbarTestBtnClickHandler);
    });
  }
}

function stopInitNavbarTestBtns() {
  if (navbarTestBtns) {
    navbarTestBtns.forEach(function (element) {
      element.removeEventListener('click', navbarTestBtnClickHandler);
    });
  }
}

function navbarTestBtnClickHandler(evt) {
  var targetBtn = evt.target;
  var testId = targetBtn.id;
  var testDescription;

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

function switchIconOfNavbarHeaderBtn() {
  if (navbarArrowBtn && navbarBurgerBtn) {
    navbarArrowBtn.classList.toggle(NAVBAR_ARROW_CLASS_CLOSED);
    navbarBurgerBtn.classList.toggle(NAVBAR_BURGER_CLASS_CLOSED);
  }
}
'use strict';

var promptSection = document.querySelector('.test-prompt');
var PROMPT_SECTION_CLASS_CLOSED = 'test-prompt--closed';

function openPromptSection() {
  openBlock(promptSection, PROMPT_SECTION_CLASS_CLOSED);
}

function closePromptSection() {
  closeBlock(promptSection, PROMPT_SECTION_CLASS_CLOSED);
}
'use strict';

var jsonTestData;

function serverAjaxRequest() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://demindesign.ru/intas-test/tests.php');
  request.send();
  request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status === 200) {
      jsonTestData = JSON.parse(request.response);
      setTestName();
    }
  });
}

function setTestName() {
  if (navbarTestBtns) {
    for (var i = 0; i < navbarTestBtns.length; i++) {
      navbarTestBtns[i].textContent = jsonTestData[i].name;
    }
  }
}
'use strict';
'use strict';

var testFieldSection = document.querySelector('.test-field');
var outBtn = document.querySelector('.current-test-header__out-btn');
var completeBtn = document.querySelector('.test-form__submit');
var testForm = document.querySelector('.test-form');
var TEST_FIELD_SECTION_CLASS_CLOSED = 'test-field--closed';

function openTestFieldSection() {
  openBlock(testFieldSection, TEST_FIELD_SECTION_CLASS_CLOSED);
}

function closeTestFieldSection() {
  closeBlock(testFieldSection, TEST_FIELD_SECTION_CLASS_CLOSED);
}

function clearTestResult() {
  testForm.reset();
}

function initOutBtn() {
  if (outBtn) {
    outBtn.addEventListener('click', outBtnClickHandler);
  }
}

function stopInitOutBtn() {
  if (outBtn) {
    outBtn.removeEventListener('click', outBtnClickHandler);
  }
}

function outBtnClickHandler() {
  openModal();
}

function initCompleteBtn() {
  if (completeBtn) {
    completeBtn.addEventListener('click', completeBtnClickHandler);
  }
}

function stopInitCompleteBtn() {
  if (completeBtn) {
    completeBtn.remove('click', completeBtnClickHandler);
  }
}

function completeBtnClickHandler(evt) {
  console.log(evt.type);
}
'use strict';

var testHeaderWrapper = document.querySelector('.test-header-wrapper');
var descriptionTestHeader = document.querySelector('.description-test-header');
var currentTestHeader = document.querySelector('.current-test-header');
var currentTestHeaderOutBtn = document.querySelector('.current-test-header__out-btn');
var TEST_HEADER_CLASS_CLOSED = 'test-header-wrapper--closed';
var DESCRIPTION_TEST_HEADER_CLASS_CLOSED = 'description-test-header--closed';
var CURRENT_TEST_HEADER_CLASS_CLOSED = 'current-test-header--closed';

function openTestHeaderWrapper() {
  openBlock(testHeaderWrapper, TEST_HEADER_CLASS_CLOSED);
}

function closeTestHeaderWrapper() {
  closeBlock(testHeaderWrapper, TEST_HEADER_CLASS_CLOSED);
}

function openDescriptionTestHeader() {
  openBlock(descriptionTestHeader, DESCRIPTION_TEST_HEADER_CLASS_CLOSED);
}

function closeDescriptionTestHeader() {
  closeBlock(descriptionTestHeader, DESCRIPTION_TEST_HEADER_CLASS_CLOSED);
}

function openCurrentTestHeader() {
  openBlock(currentTestHeader, CURRENT_TEST_HEADER_CLASS_CLOSED);
}

function closeCurrentTestHeader() {
  closeBlock(currentTestHeader, CURRENT_TEST_HEADER_CLASS_CLOSED);
}
//# sourceMappingURL=main.js.map
