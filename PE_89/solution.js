const fs = require("fs");

const conversions = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function convert(numeral) {
  let sum = 0;
  for (let i = 0; i < numeral.length; i++) {
    if (i === numeral.length - 1) {
      sum += numeral[i];
      continue;
    }

    if (numeral[i + 1] > numeral[i]) {
      sum += numeral[i + 1] - numeral[i];
      i++;
      continue;
    }

    sum += numeral[i];
  }
  return sum;
}

function romanize(num) {
  let digits = String(+num).split("");
  let key = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];
  var roman = "",
    i = 3;
  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}

let numerals = fs.readFileSync("p089_roman.txt").toString().split("\n");
let solution = numerals
  .map((e) => e.split("").map((n) => conversions[n]))
  .map((n, i) => Math.abs(numerals[i].length - romanize(convert(n)).length))
  .reduce((p, c) => p + c, 0);

console.log(solution);
