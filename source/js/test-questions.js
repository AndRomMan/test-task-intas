/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';

let questionTestFields = document.querySelectorAll('.question-text-js');
let lastQuestionAssertions = document.querySelectorAll('.question-assertion-js');
// jsonTestData.name
// jsonTestData.description

// jsonTestData.question1
// jsonTestData.question2
// jsonTestData.question3
// jsonTestData.question4

// jsonTestData.answer1
// jsonTestData.answer2
// jsonTestData.answer3
// jsonTestData.answer4
// jsonTestData.answer5

// jsonTestData.question5.assertion1
// jsonTestData.question5.assertion2
// jsonTestData.question5.assertion3

function fillTestQuestions(testId) {
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

    if (questionTestFields) {
      assignmentQuestionNames(questionTestFields, dataObj);
    }

    if (lastQuestionAssertions) {
      assignmentLastQuestionAssertions(lastQuestionAssertions, dataObj);
    }
  }
}

// обходим массив и задаем текстовый контент каждому элементу массива
function assignmentQuestionNames(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].textContent = obj['question' + (i + 1)];
  }
}

function assignmentLastQuestionAssertions(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].textContent = obj['question5-assertions']['assertion' + (i + 1)];
  }
}
