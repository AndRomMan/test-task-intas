/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';

let testHeaderWrapper = document.querySelector('.test-header-wrapper');
let descriptionTestHeader = document.querySelector('.description-test-header');
let currentTestHeader = document.querySelector('.current-test-header');
let currentTestName = document.querySelector('.current-test-header__test-name');
let currentTestHeaderOutBtn = document.querySelector('.current-test-header__out-btn');

const TEST_HEADER_CLASS_CLOSED = 'test-header-wrapper--closed';
const DESCRIPTION_TEST_HEADER_CLASS_CLOSED = 'description-test-header--closed';
const CURRENT_TEST_HEADER_CLASS_CLOSED = 'current-test-header--closed';

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
