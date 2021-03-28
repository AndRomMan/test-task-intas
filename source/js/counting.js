/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';
let userAnswers = document.querySelectorAll('input');
let summaryUserAnswers = document.querySelectorAll('.summary-user-answer-js');
const USER_EMPTY_ANSWER = 'Не ответили';

const answerKeys = {
  key1: 'question-1',
  key2: 'question-2',
  key3: 'question-3',
  key4: 'question-4',
  key5: 'question-5',
};

function setUserTestAnswersInSummary() {
  setNotAnswer();
  storeUserTestAnswersToLocalStorage();
  getUserTestAnswers();
}

function setNotAnswer() {
  for (const key in answerKeys) {
    if (key) {
      localStorage.setItem(answerKeys[key], USER_EMPTY_ANSWER);
    }
  }
}

function storeUserTestAnswersToLocalStorage() {
  userAnswers.forEach((element) => {
    let key = element.name;

    if (element.checked) {
      checkedInputCounter++;
      setCheckedFieldCounter(checkedInputCounter);

      let next = element.nextElementSibling.textContent;
      localStorage.setItem(key, next);
    }
  });
}

function getUserTestAnswers() {
  let length = summaryUserAnswers.length;

  for (let i = 0; i < length; i++) {
    summaryUserAnswers[i].textContent = localStorage.getItem('question-' + (i + 1));
  }
}
