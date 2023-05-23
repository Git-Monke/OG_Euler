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

function concat(a, b) {
  return a * Math.pow(10, ~~Math.log10(b) + 1) + b;
}

let odds = [];
let evens = [];

for (let i = 1; i < 10000; i += 6) {
  if (is_prime(i)) {
    odds.push(i);
  }
}

for (let i = 1; i < 1000; i++) {
  if (is_prime(i * 6 - 1)) {
    evens.push(i * 6 - 1);
  }
}

let solution = 0;
for (let a = 0; a < evens.length; a++) {
  for (let b = a; b < evens.length; b++) {
    if (is_prime(concat(evens[a], evens[b]))) {
      solution++;
    }
  }
}

console.log(solution);
