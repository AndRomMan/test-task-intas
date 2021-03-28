/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';

let summary = document.querySelector('.test-summary');
let summaryQuestions = document.querySelectorAll('.summary-question-js');
let summaryAnswers = document.querySelectorAll('.summary-answer-js');

const SHOW_SUMMARY_CLASS = 'test-summary--top';

// jsonTestData.answer1
// jsonTestData.answer2
// jsonTestData.answer3
// jsonTestData.answer4
// jsonTestData.answer5

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
  let dataObj;

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
  for (let i = 0; i < arr.length; i++) {
    arr[i].textContent = obj['question' + (i + 1)];
  }
}

function assignmentSummaryAnswers(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].textContent = obj['answer' + (i + 1)];
  }
}
