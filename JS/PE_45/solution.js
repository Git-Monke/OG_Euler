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

// Assumes C is an odd composite number
function is_expressable(c) {
  let ub = Math.sqrt(c * 0.5);

  for (let i = 1; i < ub; i++) {
    if (is_prime(c - 2 * i * i)) {
      return true;
    }
  }

  return false;
}

let i = 1;
let solution;

while (!solution) {
  i += 2;

  if (is_prime(i)) {
    continue;
  }

  if (!is_expressable(i)) {
    solution = i;
  }
}

console.log(solution);
