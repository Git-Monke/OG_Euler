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

function uhgjfm(max) {
  let n = 0;
  let d = 1;
  let count = 1;
  let x = 1;
  while (n == 0 || n / d >= max / 100) {
    for (let i = 0; i < 3; i++) {
      count += 2 * x;
      if (is_prime(count)) n++;
    }
    count += 2 * x;
    d += 4;
    x++;
  }
  return n + "/" + d + ", side length " + (2 * (x - 1) + 1);
}

console.log(uhgjfm(10));
