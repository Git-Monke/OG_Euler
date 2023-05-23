// Slow implementation
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function lpf(n) {
  let current = 0;
  let max = 0;

  while (current < n) {
    while (!isPrime(current)) {
      current++;
    }

    if (n % current === 0) {
      max = current;
    }

    current++;
  }

  return max;
}

// Better attempt 1

function isPrime2(n) {
  if (n === 1) {
    return false;
  }

  let i = 2;

  while (i * i <= n) {
    if (n % i === 0) {
      return false;
    }
    i++;
  }

  return true;
}

function lpf2(n) {
  let current = 1;
  let max = 1;

  let half = n / 2;
  while (current < half) {
    while (!isPrime2(current)) {
      current++;
    }

    if (n % current === 0) {
      max = current;
    }
    console.log(current);
    current++;
  }

  return max;
}

console.log(lpf2(600851475143));
