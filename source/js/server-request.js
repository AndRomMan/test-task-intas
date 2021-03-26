/* eslint-disable no-console */
/* eslint-disable no-invalid-this */
'use strict';

let jsonTestData;

function serverAjaxRequest() {
  let request = new XMLHttpRequest();
  request.open('GET', 'http://intas-site/test_data.php');
  request.send();
  request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status === 200) {
      jsonTestData = JSON.parse(request.response);
      setTestFields();
      // console.log(jsonTestData);
    }
  });
}

function setTestFields() {
  setTestName();
}

function setTestName() {
  if (navbarTestBtns) {
    for (let i = 0; i < navbarTestBtns.length; i++) {
      // console.log(navbarTestBtns[i]);
      console.log(navbarTestBtns[i].textContent);
      navbarTestBtns[i].textContent = jsonTestData[i].name;
    }
  }
}
