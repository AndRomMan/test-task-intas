/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';

let summary = document.querySelector('.test-summary');

const SHOW_SUMMARY_CLASS = 'test-summary--top';

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
