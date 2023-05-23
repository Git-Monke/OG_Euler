function gcd(a, b) {
  while (a != b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

function test(p) {
  // Stores how many times sums show up
  let trips = new Int8Array(p);

  // Generate all primitive triples such that a+b+c<=p, along with its multiples
  for (let m = 2; m < (Math.sqrt(2 * p + 1) - 1) / 2; m++) {
    for (let n = (m % 2) + 1; n < m && n < p / (2 * m) - m; n += 2) {
      if (gcd(m, n) != 1) {
        continue;
      }
      let sum = 2 * m * m + 2 * m * n;
      for (let k = 1; k <= ~~(p / sum); k++) {
        trips[k * sum] = (trips[k * sum] || 0) + 1;
      }
    }
  }

  // Count up how many sums only appeared once
  let sol = 0;
  for (let i = 0; i < p; i++) {
    if (trips[i] === 1) {
      sol++;
    }
  }

  // Return it
  return sol;
}

let start = performance.now();
console.log(test(1_500_000));
let end = performance.now() - start;
console.log(end.toLocaleString() + "ms");
