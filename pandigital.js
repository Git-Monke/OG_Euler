let primes = [2, 3, 5, 7, 11, 13, 17];

function f(n) {
  let f = 1;
  while (n > 0) {
    f *= n;
    n--;
  }
  return f;
}

function perm(n) {
  let perm_n = n - 1;
  let digits = Array(10)
    .fill(null)
    .map((_, i) => i);
  let result = "";
  for (let i = 9; i >= 0; i--) {
    let factorial = f(i);
    let bucket = ~~(perm_n / factorial);
    let digit = digits[bucket];
    digits.splice(bucket, 1);
    perm_n -= bucket * factorial;
    result += digit;
  }
  return result;
}

function test(n) {
  n = n.toString();
  for (let i = 0; i < primes.length; i++) {
    if (parseInt(n.slice(i + 1, i + 4)) % primes[i] !== 0) {
      return false;
    }
  }
  return true;
}

let f10 = f(10);
let solution = 0;
console.time("test");
for (let i = 1; i <= f10; i++) {
  let perm_n = perm(i);
  if (test(perm_n)) {
    console.log(perm_n);
    solution += parseInt(perm_n);
  }
}
console.log(`Solution: ${solution}`);
console.timeEnd("test");
