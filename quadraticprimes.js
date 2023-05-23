function generate_primes(n) {
  let sieve = Array(n).fill(true);
  let primes = [];

  for (let i = 2; i < n; i++) {
    if (sieve[i] == true) {
      primes.push(i);

      for (let j = i; j < n; j += i) {
        sieve[j] = false;
      }
    }
  }

  return primes;
}

function is_prime(n) {
  if (n < 0) {
    return false;
  }

  let i = 2;

  while (i * i <= n) {
    if (n % i == 0) {
      return false;
    }

    i++;
  }

  return true;
}

function test(a, b) {
  let d = 0;
  let p;

  do {
    d++;
    p = d * d + a * d + b;
  } while (is_prime(p));

  return d - 1;
}

// 9.2ms runtime, average of 1000.
function solve(n = 1000) {
  n -= 1;

  let a;
  let b;
  let best = 0;
  let primes = generate_primes(n);

  for (let i = -n; i <= n; i += 2) {
    for (let j = 0; j < primes.length; j++) {
      let result = test(i, primes[j]);

      if (result > best) {
        best = result;
        a = i;
        b = primes[j];
      }
    }
  }

  return [a, b];
}

let average = 0;

for (let i = 0; i < 1000; i++) {
  let start = performance.now();
  solve(1000);
  let end = performance.now();
  average += end - start;
}

console.log(`Runtime: ${(average / 1000).toLocaleString()}ms`);
