function sieve(max) {
  let sieve = Array.from({ length: max }, () => true);
  let primes = [];
  for (let i = 2; i < max; i++) {
    if (sieve[i]) {
      primes.push(i);
      for (let j = i; j < max; j += i) {
        sieve[j] = false;
      }
    }
  }
  return primes;
}

let primes = sieve(10000);

function solve(n) {
  ways = Array.from({ length: n + 1 }, () => 0);
  ways[0] = 1;

  for (let prime of primes) {
    for (let j = prime; j <= n; j++) {
      ways[j] += ways[j - prime];
    }
  }

  return ways.pop();
}

for (let i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
  let sol = solve(i);

  if (sol >= 5e3) {
    console.log(i + " is solvable " + sol + " ways.");
    break;
  }
}
