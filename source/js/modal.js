/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';

let modal = document.querySelector('.modal');
let modalExitBtn = document.querySelector('.modal__exit-button');
let modalEscapeBtn = document.querySelector('.modal__escape-button');

const MODAL_CLASS_CLOSED = 'modal--closed';

function openModal() {
  openBlock(modal, MODAL_CLASS_CLOSED);
  initModalButtons();
  modalEscapeBtn.focus();
}

function closeModal() {
  closeBlock(modal, MODAL_CLASS_CLOSED);
  stopInitModalButtons();
}

function initModalButtons() {
  if (modalExitBtn) {
    modalExitBtn.addEventListener('click', modalExitBtnClickHandler);
  }
  if (modalEscapeBtn) {
    modalEscapeBtn.addEventListener('click', modalEscapeBtnClickHandler);
  }
}

function stopInitModalButtons() {
  modalExitBtn.removeEventListener('click', modalExitBtnClickHandler);
  modalEscapeBtn.removeEventListener('click', modalEscapeBtnClickHandler);
}

function modalExitBtnClickHandler() {
  closeModal();
  closeCurrentTest();
  stopInitModalButtons();
}

function modalEscapeBtnClickHandler() {
  closeModal();
  stopInitModalButtons();
}
