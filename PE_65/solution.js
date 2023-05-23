function solve(c) {
  let n = 1n;
  let d = c.pop();
  while (c.length) {
    let digit = c.pop();
    let t = n + digit * d;
    n = d;
    d = t;
  }
  return [d, n];
}

function dig_sum(n) {
  return n
    .toString()
    .split("")
    .reduce((p, c) => p + parseInt(c), 0);
}

let e = [2n];
for (let i = 1; i < 100; i++) {
  if ((i + 1) % 3 === 0) {
    e.push(BigInt((2 * i + 2) / 3));
  } else {
    e.push(1n);
  }
}

console.log(dig_sum(solve(e)[0]));
