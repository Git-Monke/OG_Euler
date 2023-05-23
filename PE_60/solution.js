// Pre-Calculated list of primes up less than 10,000
const fs = require("fs");
const primes = fs
  .readFileSync("primes.txt")
  .toString()
  .split(",")
  .map((p) => parseInt(p));

// Utility Functions
function concat(a, b) {
  return a * Math.pow(10, ~~Math.log10(b) + 1) + b;
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

function test(c, p) {
  for (let prime of c) {
    if (!is_prime(concat(prime, p)) || !is_prime(concat(p, prime))) {
      return false;
    }
  }
  return true;
}

// Actual Solution
function generate_set(depth, current_set = []) {
  if (depth === 0) {
    return current_set;
  }

  let extention = false;
  for (let i = 0; i < primes.length; i++) {
    let p = primes[i];

    if (test(current_set, p)) {
      extention = generate_set(depth - 1, current_set.concat([p]));
    }

    if (extention) {
      return extention;
    }
  }

  return false;
}

console.time("Calculation time");
console.log(generate_set(5));
console.timeEnd("Calculation time");
