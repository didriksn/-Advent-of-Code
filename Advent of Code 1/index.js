import * as fs from "fs";

const calories = fs.readFileSync("calories.txt").toString().split("\r\n");

var o = [];
var sum = 0;

for (let i = 0; i < calories.length; i++) {
  if (+calories[i] == 0) {
    o.push(sum)
    sum = 0;
  } else {
    sum += +calories[i];
  }
}


  let num1 = Number.NEGATIVE_INFINITY;
  let num2 = Number.NEGATIVE_INFINITY;
  let num3 = Number.NEGATIVE_INFINITY;
  
  for (let i = 0; i < o.length; i++) {
    if (o[i] > num1) {
      let temp1 = num1
      let temp2 = num2;
      num1 = o[i];
      num2 = temp1;
      num3 = temp2;
    } else if (o[i] > num2) {
      let temp2 = num2;
      num2 = o[i];
      num3 = temp2;
    } else if (o[i] > num3) {
      num3 = o[i];
    }
  }

console.log(num3 + num2 + num1);