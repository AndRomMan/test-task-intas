/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';

let testFieldSection = document.querySelector('.test-field');
let outBtn = document.querySelector('.current-test-header__out-btn');

let testForm = document.querySelector('.test-form');

const TEST_FIELD_SECTION_CLASS_CLOSED = 'test-field--closed';

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
