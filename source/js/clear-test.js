/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';

function clearTestResult() {
  testForm.reset();
  localStorage.clear();
  checkedInputCounter = 0;
  setCheckedFieldCounter(checkedInputCounter);
  correctUserAnswerCounter = 0;
  setCorrectAnswerCounter(correctUserAnswerCounter);
}
