/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';

let descriptionField = document.querySelector('.test-description__text');
let testDescriptionSection = document.querySelector('.test-description');
let testStartBtn = document.querySelector('.test-description__start');
let testEscapeBtn = document.querySelector('.test-description__escape');

const DESCRIPTION_SECTION_CLASS_CLOSED = 'test-description--closed';

// вносит название теста в поле test-description__text
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

  // FIXME снять обработчики с кнопок "выход" и "завершить"
  stopInitOutBtn();
  stopInitCompleteBtn();
}

function openTestDescriptionSection() {
  openBlock(testDescriptionSection, DESCRIPTION_SECTION_CLASS_CLOSED);
}

function closeTestDescriptionSection() {
  closeBlock(testDescriptionSection, DESCRIPTION_SECTION_CLASS_CLOSED);
}
