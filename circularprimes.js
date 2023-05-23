const UB = 1_000_000;
let sieve = new Array(UB);

for (let i = 0; i < UB; i++) {
  sieve[i] = true;
}

for (let i = 2; i < UB; i++) {
  if (sieve[i] === true) {
    for (let j = i * 2; j < UB; j += i) {
      sieve[j] = false;
    }
  }
}

function rotate_digits(n) {
  let pow_10 = 10 ** (~~Math.log10(n) + 1);
  return ~~(((n * 10) % pow_10) + (n * 10) / pow_10);
}

function is_circular(p) {
  let rotations = ~~Math.log10(p);

  for (let i = 0; i < rotations; i++) {
    p = rotate_digits(p);
    if (!sieve[p]) {
      return false;
    }
  }

  return true;
}

for (let i = 2; i < UB; i++) {
  if (!sieve[i]) {
    continue;
  }

  if (!is_circular(i) || i.toString().split("").includes("0")) {
    sieve[i] = false;
  } else {
    console.log(i);
  }
}

console.log(sieve.reduce((p, c) => p + (c === true ? 1 : 0)) - 2);
