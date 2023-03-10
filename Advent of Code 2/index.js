import * as fs from "fs";

const rps = fs.readFileSync("rps.txt").toString().split(/\s+/);

// X, A=ROCK, Y, B=PAPER, Z, C=SCISSORS
const map = new Map();
map.set("X", 1)
   .set("A", 1)

   .set("Y", 2)
   .set("B", 2)

   .set("Z", 3)
   .set("C", 3);

let sum = 0;
for (let i = 0; i < rps.length; i+=2) {
  let round = new Array(rps[i], rps[i + 1])
  let opponentChoice = round[0];
  let myChoice = round[1];
  let myValues = map.get(myChoice);
  let opponentValues = map.get(opponentChoice);

  sum += myValues;

  if(myValues == opponentValues) sum+=3; 
  
  let winCalculate = myValues - 1;
  winCalculate<1 ? winCalculate = 3 : winCalculate;
  if (winCalculate == opponentValues) sum+=6;
}

console.log(sum);
