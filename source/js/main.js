'use strict';

// polyfill forEach for IE 11
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// if (window.NodeList && !NodeList.prototype.forEach) {
//   NodeList.prototype.forEach = function (callback, thisArg) {
//     thisArg = thisArg || window;
//     for (let i = 0; i < this.length; i++) {
//       callback.call(thisArg, this[i], i, this);
//     }
//   };
// }
