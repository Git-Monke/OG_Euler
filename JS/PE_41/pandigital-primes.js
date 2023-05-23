function f(n) {
  let f = 1;
  while (n > 0) {
    f *= n;
    n--;
  }
  return f;
}

function perm(n, d) {
  let perm_n = n - 1;
  let digits = Array(d)
    .fill(null)
    .map((_, i) => i + 1);
  let result = "";
  for (let i = d - 1; i >= 0; i--) {
    let factorial = f(i);
    let bucket = ~~(perm_n / factorial);
    let digit = digits[bucket];
    digits.splice(bucket, 1);
    perm_n -= bucket * factorial;
    result += digit;
  }
  return result;
}

function is_prime(n) {
  let i = 2;

  while (i * i <= n) {
    if (n % i === 0) {
      return false;
    }

    i++;
  }

  return true;
}

solve: for (let i = 7; i > 0; i--) {
  for (let j = f(i); j > 0; j--) {
    let perm_n = parseInt(perm(j, i));
    if (is_prime(perm_n)) {
      console.log(perm_n);
      break solve;
    }
  }
}
