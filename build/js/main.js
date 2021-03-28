'use strict';

function clearTestResult() {
  testForm.reset();
  localStorage.clear();
  checkedInputCounter = 0;
  setCheckedFieldCounter(checkedInputCounter);
}
'use strict';

var checkedFieldCounterBlock = document.querySelector('.test-counter__current');
var correctcheckedInputCounterBlock = document.querySelector('.test-summary__counter');
var checkedInputCounter = 0;

function setCheckedFieldCounter(num) {
  if (checkedFieldCounterBlock) {
    checkedFieldCounterBlock.textContent = num;
  }
}
'use strict';

var userAnswers = document.querySelectorAll('input');
var summaryUserAnswers = document.querySelectorAll('.summary-user-answer-js');
var USER_EMPTY_ANSWER = 'Не ответили';
var answerKeys = {
  key1: 'question-1',
  key2: 'question-2',
  key3: 'question-3',
  key4: 'question-4',
  key5: 'question-5'
};

function setUserTestAnswersInSummary() {
  setNotAnswer();
  storeUserTestAnswersToLocalStorage();
  getUserTestAnswers();
}

function setNotAnswer() {
  for (var key in answerKeys) {
    if (key) {
      localStorage.setItem(answerKeys[key], USER_EMPTY_ANSWER);
    }
  }
}

function storeUserTestAnswersToLocalStorage() {
  userAnswers.forEach(function (element) {
    var key = element.name;

    if (element.checked) {
      checkedInputCounter++;
      setCheckedFieldCounter(checkedInputCounter);
      var next = element.nextElementSibling.textContent;
      localStorage.setItem(key, next);
    }
  });
}

function getUserTestAnswers() {
  var length = summaryUserAnswers.length;

  for (var i = 0; i < length; i++) {
    summaryUserAnswers[i].textContent = localStorage.getItem('question-' + (i + 1));
  }
}
'use strict';

function openCurrentTest() {
  stopInitNavbarTestBtns();
  openTestHeaderWrapper();
  openCurrentTestHeader();
  openTestFieldSection();
  closePromptSection();
  openCompleteBtn();
  initOutBtn();
  initCompleteBtn();
  hideSummary();
}

function closeCurrentTest() {
  initNavbarTestBtns();
  clearTestResult();
  closeTestHeaderWrapper();
  closeCurrentTestHeader();
  closeTestFieldSection();
  openPromptSection();
  closeCompleteBtn();
  closeRetestBtn();
  stopInitOutBtn();
  stopInitCompleteBtn();
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
  modalEscapeBtn.focus();
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
  var testName;

  if (testId === ID_1) {
    testDescription = jsonTestData[0].description;
    testName = jsonTestData[0].name;
  } else if (testId === ID_2) {
    testDescription = jsonTestData[1].description;
    testName = jsonTestData[1].name;
  } else if (testId === ID_3) {
    testDescription = jsonTestData[2].description;
    testName = jsonTestData[2].name;
  } else if (testId === ID_4) {
    testDescription = jsonTestData[3].description;
    testName = jsonTestData[3].name;
  }

  fillTestQuestions(testId);
  fillSummaryQuestions(testId);
  setTestDescriptionText(testDescription);
  setCurrentTestName(testName);
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

function setTestName() {
  if (navbarTestBtns) {
    for (var i = 0; i < navbarTestBtns.length; i++) {
      navbarTestBtns[i].textContent = jsonTestData[i].name;
    }
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
'use strict';

var summary = document.querySelector('.test-summary');
var summaryQuestions = document.querySelectorAll('.summary-question-js');
var summaryAnswers = document.querySelectorAll('.summary-answer-js');
var SHOW_SUMMARY_CLASS = 'test-summary--top';

function showSummary() {
  if (summary) {
    summary.classList.add(SHOW_SUMMARY_CLASS);
  }
}

function hideSummary() {
  if (summary) {
    summary.classList.remove(SHOW_SUMMARY_CLASS);
  }
}

function fillSummaryQuestions(testId) {
  var dataObj;

  if (questionTestFields) {
    if (testId === ID_1) {
      dataObj = jsonTestData[0];
    } else if (testId === ID_2) {
      dataObj = jsonTestData[1];
    } else if (testId === ID_3) {
      dataObj = jsonTestData[2];
    } else if (testId === ID_4) {
      dataObj = jsonTestData[3];
    }

    if (summaryQuestions) {
      assignmentSummaryQuestions(summaryQuestions, dataObj);
    }

    if (summaryAnswers) {
      assignmentSummaryAnswers(summaryAnswers, dataObj);
    }
  }
}

function assignmentSummaryQuestions(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].textContent = obj['question' + (i + 1)];
  }
}

function assignmentSummaryAnswers(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].textContent = obj['answer' + (i + 1)];
  }
}
'use strict';
'use strict';

var completeBtn = document.querySelector('.test-form__complete');
var retestBtn = document.querySelector('.test-form__retest');
var COMPLETE_BTN_CLASS_CLOSED = 'test-form__complete--closed';
var RETEST_BTN_CLASS_CLOSED = 'test-form__retest--closed';

function openCompleteBtn() {
  if (completeBtn) {
    openBlock(completeBtn, COMPLETE_BTN_CLASS_CLOSED);
    completeBtn.addEventListener('click', completeBtnClickHandler);
  }
}

function closeCompleteBtn() {
  if (completeBtn) {
    closeBlock(completeBtn, COMPLETE_BTN_CLASS_CLOSED);
    completeBtn.removeEventListener('click', completeBtnClickHandler);
  }
}

function openRetestBtn() {
  if (retestBtn) {
    openBlock(retestBtn, RETEST_BTN_CLASS_CLOSED);
    retestBtn.addEventListener('click', retestBtnClickHandler);
  }
}

function closeRetestBtn() {
  if (retestBtn) {
    closeBlock(retestBtn, RETEST_BTN_CLASS_CLOSED);
    retestBtn.removeEventListener('click', retestBtnClickHandler);
  }
}

function completeBtnClickHandler() {
  closeCompleteBtn();
  openRetestBtn();
  showSummary();
  setUserTestAnswersInSummary();
}

function retestBtnClickHandler() {
  clearTestResult();
  closeRetestBtn();
  openCompleteBtn();
  hideSummary();
}
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

function testStartBtnClickHandler() {
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

function openTestDescriptionSection() {
  openBlock(testDescriptionSection, DESCRIPTION_SECTION_CLASS_CLOSED);
}

function closeTestDescriptionSection() {
  closeBlock(testDescriptionSection, DESCRIPTION_SECTION_CLASS_CLOSED);
}
'use strict';

var testFieldSection = document.querySelector('.test-field');
var outBtn = document.querySelector('.current-test-header__out-btn');
var testForm = document.querySelector('.test-form');
var TEST_FIELD_SECTION_CLASS_CLOSED = 'test-field--closed';

function openTestFieldSection() {
  openBlock(testFieldSection, TEST_FIELD_SECTION_CLASS_CLOSED);
}

function closeTestFieldSection() {
  closeBlock(testFieldSection, TEST_FIELD_SECTION_CLASS_CLOSED);
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
    completeBtn.removeEventListener('click', completeBtnClickHandler);
  }
}
'use strict';

var testHeaderWrapper = document.querySelector('.test-header-wrapper');
var descriptionTestHeader = document.querySelector('.description-test-header');
var currentTestHeader = document.querySelector('.current-test-header');
var currentTestName = document.querySelector('.current-test-header__test-name');
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

function setCurrentTestName(name) {
  if (currentTestName) {
    currentTestName.textContent = name;
  }
}
'use strict';

var questionTestFields = document.querySelectorAll('.question-text-js');
var lastQuestionAssertions = document.querySelectorAll('.question-assertion-js');

function fillTestQuestions(testId) {
  var dataObj;

  if (questionTestFields) {
    if (testId === ID_1) {
      dataObj = jsonTestData[0];
    } else if (testId === ID_2) {
      dataObj = jsonTestData[1];
    } else if (testId === ID_3) {
      dataObj = jsonTestData[2];
    } else if (testId === ID_4) {
      dataObj = jsonTestData[3];
    }

    if (questionTestFields) {
      assignmentQuestionNames(questionTestFields, dataObj);
    }

    if (lastQuestionAssertions) {
      assignmentLastQuestionAssertions(lastQuestionAssertions, dataObj);
    }
  }
}

function assignmentQuestionNames(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].textContent = obj['question' + (i + 1)];
  }
}

function assignmentLastQuestionAssertions(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].textContent = obj['question5-assertions']['assertion' + (i + 1)];
  }
}
//# sourceMappingURL=main.js.map
