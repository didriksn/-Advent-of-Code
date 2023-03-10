import * as fs from "fs";

const sacks = fs.readFileSync("sacks.txt").toString().split("\r\n");

var sum = 0;
let match;

for (let i = 0; i < sacks.length; i++) {
  let s = sacks[i];

  let middle = s.length / 2;
  let before = s.lastIndexOf(middle);
  let after = s.indexOf(middle + 1);

  var firstHalf = s.substring(0, middle);
  var secondHalf = s.substring(middle);

  for (let j = 0; j < secondHalf.length; j++) {
    if (firstHalf.includes(secondHalf[j])) {
      match = secondHalf[j];
    }
  }

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let map = new Map();
  for (let k = 0; k < letters.length; k++) {
    map.set(letters[k], k + 1);
  }

  sum += map.get(match);
  console.log(sum);
}