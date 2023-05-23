function BigSqrt(S) {
  let x1 = S;
  let x2 = S / 2n;
  while (x1 - x2 > 1) {
    x1 = x2;
    x2 = (x2 + S / x2) / 2n;
  }
  return x2;
}

function is_square(n) {
  let sqrt = BigSqrt(n);
  return sqrt * sqrt === n;
}

// console.log(is_square(5517673844664568355n));
let start = performance.now();
BigSqrt(10000000000n);
let time = performance.now() - start;
console.log(time + "ms");
