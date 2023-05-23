const fs = require("fs");

function word_score(s) {
  return s.split("").reduce((p, c) => p + c.charCodeAt(0) - 64, 0);
}

function is_triangular(n) {
  let discrim = Math.sqrt(1 + 8 * n);
  return Number.isInteger(discrim);
}

let words = fs
  .readFileSync("p042_words.txt", "utf8")
  .toString()
  .split(",")
  .map((a) => a.substring(1, a.length - 1));

let solution = words.reduce((p, c) => p + is_triangular(word_score(c)), 0);
console.log(`Solution: ${solution}`);
