// ajax_ip.js

/* eslint-disable no-console */
/* eslint-disable no-invalid-this */
'use strict';
// ajax_echo_post.php
// ajax_echo_get.php

const ajaxGetBtn = document.querySelector('.get-btn');

ajaxGetBtn.addEventListener('click', ajaxGetBtnClickHandler);

function ajaxGetBtnClickHandler() {
  let request = new XMLHttpRequest();
  // request.open('GET', 'http://intas-site/test_data.php');
  request.open('GET', './test_data.php');
  request.send();
  request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status === 200) {
      console.log('----------  server request');
      console.log(request);

      console.log('---------- response from server: ');
      console.log(request.response);

      console.log('---------- JSON: ');

      const jsonData = JSON.parse(request.response);
      console.log(jsonData);
    }
  });
}
