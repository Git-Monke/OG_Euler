function digital_sum(n) {
  let sum = 0n;
  while (n > 0n) {
    sum += n % 10n;
    n /= 10n;
  }
  return sum;
}

let solution = 0n;

for (let a = 1n; a <= 100n; a++) {
  for (let b = 1n; b <= 100n; b++) {
    let sum = digital_sum(a ** b);
    if (sum > solution) {
      console.log(a, b);
      solution = sum;
    }
  }
}

console.log(solution);
console.log((99n ** 99n - 99n ** 95n).toLocaleString());
