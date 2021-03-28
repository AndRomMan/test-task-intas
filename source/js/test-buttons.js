/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';

let completeBtn = document.querySelector('.test-form__complete');
let retestBtn = document.querySelector('.test-form__retest');

const COMPLETE_BTN_CLASS_CLOSED = 'test-form__complete--closed';
const RETEST_BTN_CLASS_CLOSED = 'test-form__retest--closed';

function openCompleteBtn() {
  if (completeBtn) {
    openBlock(completeBtn, COMPLETE_BTN_CLASS_CLOSED);
    completeBtn.addEventListener('click', completeBtnClickHandler);
  }
}

function closeCompleteBtn() {
  if (completeBtn) {
    closeBlock(completeBtn, COMPLETE_BTN_CLASS_CLOSED);
    completeBtn.removeEventListener('click', completeBtnClickHandler);
  }
}

function openRetestBtn() {
  if (retestBtn) {
    openBlock(retestBtn, RETEST_BTN_CLASS_CLOSED);
    retestBtn.addEventListener('click', retestBtnClickHandler);
  }
}

function closeRetestBtn() {
  if (retestBtn) {
    closeBlock(retestBtn, RETEST_BTN_CLASS_CLOSED);
    retestBtn.removeEventListener('click', retestBtnClickHandler);
  }
}

function completeBtnClickHandler() {
  closeCompleteBtn();
  openRetestBtn();
  showSummary();
  checkUserAnswers();
  // запустить модуль подсчета результата
  // сохранить данные в LocalStorage
  // открыть окно с результатами (поднять z-index) - загрузить данные из LocalStorage
}

function retestBtnClickHandler() {
  clearTestResult();
  closeRetestBtn();
  openCompleteBtn();
  hideSummary();
}
