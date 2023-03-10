"use strict";

var arena = [];

for (var i = 0; i < 5; i++) {
  for (var _i = 0; _i < 6; _i++) {
    arena.push("O");
  }
}

function listToString(alist) {
  alist.forEach(function (arena) {
    console.log(arena.join(" "));
  });
}

listToString(arena);