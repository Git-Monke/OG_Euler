function digits(n) {
  return n.toString().length;
}

function iterate(n, d) {
  return [n + 2n * d, n + d];
}

let n = 1n;
let d = 1n;
let solution = 0;
for (let i = 1; i <= 1000; i++) {
  [n, d] = iterate(n, d);

  if (digits(n) > digits(d)) {
    solution++;
  }
}
console.log(solution);
