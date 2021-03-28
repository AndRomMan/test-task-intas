/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';
let userAnswers = document.querySelectorAll('input');
const answerKeys = {
  key1: 'question-1',
  key2: 'question-2',
  key3: 'question-3',
  key4: 'question-4',
  key5: 'question-5',
};
// localStorage.setItem('myCat', 'Tom');
// let cat = localStorage.getItem('myCat');

function storeUserTestAnswers() {
  userAnswers.forEach((element) => {
    if (element.checked) {
      console.log('input name : ');
      console.log(element.name);

      console.log('input value : ');
      console.log(element.value);

      localStorage.setItem(element.name, element.value);
    }
  });
}

function getUserTestAnswers() {
  for (const key in answerKeys) {
    if (key) {
      console.log('localStorage Key');
      console.log(answerKeys[key]);
      console.log('localStorage Item');
      console.log(localStorage.getItem(answerKeys[key]));
    }
  }
}
