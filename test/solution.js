function is_P(n) {
  return Number.isInteger((Math.sqrt(24 * n + 1) + 1) / 6);
}

function H(n) {
  return n * (2 * n - 1);
}

function solve(solutions) {
  let found = 0;
  let n = 1;
  while (found < solutions) {
    if (is_P(H(n))) {
      found++;
      console.log(H(n));
    }
    n++;
  }
}

solve(5);
