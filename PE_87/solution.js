function get_primes(n) {
  let sieve = Array.from({ length: n }, () => true);
  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (sieve[i]) {
      primes.push(i);
      for (let j = i; j < n; j += i) {
        sieve[j] = false;
      }
    }
  }
  return primes;
}

let squares = get_primes(5e7 ** 0.5);
let cubes = get_primes(5e7 ** (1 / 3));
let fourths = get_primes(5e7 ** 0.25);

let set = new Set();

for (let square of squares) {
  for (let cube of cubes) {
    for (let fourth of fourths) {
      let sum = square * square + cube ** 3 + fourth ** 4;
      if (sum < 5e7) {
        set.add(sum);
      }
    }
  }
}

console.log(set.size);
