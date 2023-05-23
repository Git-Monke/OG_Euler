const fs = require("fs");

let logs = fs
  .readFileSync("p079_keylog.txt")
  .toString()
  .split("\n")
  .map((e) => e.split("").map((n) => parseInt(n)));

let memory = Array.from({ length: 10 }, () => new Set());

let seen_digits = new Set();
let solution = 0;

for (let log of logs) {
  for (let i = 0; i < 2; i++) {
    let digit_mem = memory[log[i]];

    for (let j = i + 1; j < 3; j++) {
      if (memory[log[j]].has(log[i])) {
        solution++;
      }

      digit_mem.add(log[j]);
    }
  }
}

console.log(memory);
