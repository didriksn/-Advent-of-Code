"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = _interopRequireWildcard(require("fs"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Part One

var partone = fs.readFileSync("sacks.txt").toString().split("\r\n").map(function (a) {
  return [a.slice(0, a.length / 2), a.slice(a.length / 2, a.length)];
}).map(function (a) {
  return _toConsumableArray(a[0]).filter(function (b) {
    return a[1].includes(b);
  })[0];
}).map(function (a) {
  return alphabet.indexOf(a) + 1;
}).reduce(function (a, b) {
  return a + b;
}, 0); // Part two

var parttwo = fs.readFileSync("sacks.txt").toString().split("\n").reduce(function (a, c, i) {
  return i % 3 == 0 && a.push([c]), i % 3 != 0 && a[a.length - 1].push(c), a;
}, []).map(function (a) {
  return _toConsumableArray(a[0]).filter(function (b) {
    return a[1].includes(b);
  }).filter(function (c) {
    return a[2].includes(c);
  })[0];
}).map(function (a) {
  return alphabet.indexOf(a) + 1;
}).reduce(function (a, b) {
  return a + b;
}, 0);
console.log(partone, parttwo);