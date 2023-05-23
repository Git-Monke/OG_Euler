function is_pentagonal(n) {
  return Number.isInteger((1 + Math.sqrt(24 * n + 1)) / 6);
}

function test(a, b) {
  return is_pentagonal(Math.abs(a - b)) && is_pentagonal(a + b);
}

function p(n) {
  return n * (3 * n - 1) * 0.5;
}
console.time("test");

let D = Infinity;

for (let a = 1; a < 5000; a++) {
  let pa = p(a);
  for (let b = a; b < 5000; b++) {
    let pb = p(b);

    if (test(pa, pb)) {
      D = Math.min(D, Math.abs(pa - pb));
    }
  }
}

console.log("Solution for Euler 43: " + D.toLocaleString());
console.timeEnd("test");
