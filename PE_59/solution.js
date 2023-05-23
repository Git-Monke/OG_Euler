const fs = require("fs");

let data = fs
  .readFileSync("p059_cipher.txt")
  .toString()
  .split(",")
  .map((e) => parseInt(e));

function xor(data, key) {
  return data.map((d, i) => String.fromCharCode(d ^ key[i % 3])).join("");
}

function e_ratio(string) {
  return string.split("").reduce((p, c) => p + (c === "e"), 0) / string.length;
}

function test() {
  for (let a = 97; a <= 122; a++) {
    for (let b = 97; b <= 122; b++) {
      for (let c = 97; c <= 122; c++) {
        let shift = xor(data, [a, b, c]);
        if (e_ratio(shift) > 0.1) {
          console.log(a, b, c);
        }
      }
    }
  }
}

console.log(
  xor(data, [101, 120, 112])
    .split("")
    .reduce((p, c) => p + c.charCodeAt(0), 0)
);
