import * as fs from "fs";
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Part One
const partone = fs.readFileSync("sacks.txt")
  .toString()
  .split("\r\n")
  .map(a=>[a.slice(0, a.length/2), a.slice(a.length/2, a.length)])
  .map(a=>[...a[0]].filter(b=>a[1].includes(b))[0])
  .map(a=>alphabet.indexOf(a)+1)
  .reduce((a, b)=>a+b, 0)

// Part two
const parttwo = fs.readFileSync("sacks.txt")
  .toString()
  .split("\n")
  .reduce((a, c, i)=>(i%3==0&&a.push([c]), i%3!=0 && a[a.length-1].push(c), a), [])
  .map(a=>[...a[0]].filter(b=>a[1].includes(b)).filter(c=>a[2].includes(c))[0])
  .map(a=>alphabet.indexOf(a)+1)
  .reduce((a, b)=>a+b, 0)

console.log(partone, parttwo)