/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
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
