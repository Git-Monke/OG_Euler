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

function cycle_length(b) {
  let a = 1;
  let t = 0;

  do {
    a = (a * 10) % b;
    t++;
  } while (a !== 1 && a !== 0);

  return t;
}

function solve(n) {
  let primes = generate_primes(n);
  let solution = 0;

  for (let i = 0; i < primes.length; i++) {
    solution = Math.max(solution, cycle_length(primes[i]));
  }

  return solution + 1;
}

console.log(solve(1000));
