'use strict';

// polyfill forEach for IE 11
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

const tests = document.querySelectorAll('.navbar-list__btn');
console.log(tests);
