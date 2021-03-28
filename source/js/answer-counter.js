/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';

let checkedFieldCounterBlock = document.querySelector('.test-counter__current');
let correctAnswerCounterBlock = document.querySelector('.test-summary__counter');

let checkedInputCounter = 0;
let correctUserAnswerCounter = 0;

function setCheckedFieldCounter(num) {
  if (checkedFieldCounterBlock) {
    checkedFieldCounterBlock.textContent = num;
  }
}

function setCorrectAnswerCounter(num) {
  if (correctAnswerCounterBlock) {
    correctAnswerCounterBlock.textContent = num;
  }
}

function checkUserAnswers() {
  let length = summaryAnswers.length;
  let counter = 0;

  for (let i = 0; i < length; i++) {
    if (summaryAnswers[i].textContent === summaryUserAnswers[i].textContent) {
      counter++;
    }
  }
  return counter;
}
