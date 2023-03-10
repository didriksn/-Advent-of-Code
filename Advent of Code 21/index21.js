import * as fs from "fs";

const monkeys = fs.readFileSync("monkeys.txt").toString().replace(/:/g, "").split("\r\n");
let list = [];

for (let i = 0; i < monkeys.length; i++) {
  let name = monkeys[i]
}


// const gen = monkeys.map(current => if (current))
console.log(monkeys)