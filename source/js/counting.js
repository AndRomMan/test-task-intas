/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';
let userAnswers = document.querySelectorAll('input');

// localStorage.setItem('myCat', 'Tom');
// let cat = localStorage.getItem('myCat');

function checkUserAnswers() {
  userAnswers.forEach((element) => {
    if (element.checked) {
      console.log(element.id);
      console.log(element.value);
    }
  });
}
