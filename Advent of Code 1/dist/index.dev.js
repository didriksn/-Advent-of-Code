"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = _interopRequireWildcard(require("fs"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var calories = fs.readFileSync("calories.txt").toString().split("\r\n");
var o = [];
var sum = 0;

for (var i = 0; i < calories.length; i++) {
  if (+calories[i] == 0) {
    o.push(sum);
    sum = 0;
  } else {
    sum += +calories[i];
  }
}

var num1 = Number.NEGATIVE_INFINITY;
var num2 = Number.NEGATIVE_INFINITY;
var num3 = Number.NEGATIVE_INFINITY;

for (var _i = 0; _i < o.length; _i++) {
  if (o[_i] > num1) {
    var temp1 = num1;
    var temp2 = num2;
    num1 = o[_i];
    num2 = temp1;
    num3 = temp2;
  } else if (o[_i] > num2) {
    var _temp = num2;
    num2 = o[_i];
    num3 = _temp;
  } else if (o[_i] > num3) {
    num3 = o[_i];
  }
}

console.log(num3 + num2 + num1);