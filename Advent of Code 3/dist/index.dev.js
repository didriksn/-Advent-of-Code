"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = _interopRequireWildcard(require("fs"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var sacks = fs.readFileSync("sacks.txt").toString().split("\r\n");
var sum = 0;
var match;

for (var i = 0; i < sacks.length; i++) {
  var s = sacks[i];
  var middle = s.length / 2;
  var before = s.lastIndexOf(middle);
  var after = s.indexOf(middle + 1);
  var firstHalf = s.substring(0, middle);
  var secondHalf = s.substring(middle);

  for (var j = 0; j < secondHalf.length; j++) {
    if (firstHalf.includes(secondHalf[j])) {
      match = secondHalf[j];
    }
  }

  var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var map = new Map();

  for (var k = 0; k < letters.length; k++) {
    map.set(letters[k], k + 1);
  }

  sum += map.get(match);
  console.log(sum);
}