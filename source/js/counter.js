/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';

let checkedFieldCounterBlock = document.querySelector('.test-counter__current');
let correctcheckedInputCounterBlock = document.querySelector('.test-summary__counter');

let checkedInputCounter = 0;

function setCheckedFieldCounter(num) {
  if (checkedFieldCounterBlock) {
    checkedFieldCounterBlock.textContent = num;
  }
}
