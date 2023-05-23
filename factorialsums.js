const factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

function f(n) {
  let sum = 0;
  while (n !== 0) {
    sum += factorials[n % 10];
    n = ~~(n * 0.1);
  }
  return sum;
}

for (let i = 10; i < 10_000_000; i++) {
  if (f(i) === i) {
    console.log(i);
  }
}
