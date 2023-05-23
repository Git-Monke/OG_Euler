function P(n) {
  return (n * (3n * n - 1n)) / 2n;
}

function parts(c) {
  let partitions = [1n];
  for (let n = 1n; n <= c; n++) {
    partitions.push(0n);
    console.log(n);
    for (let k = 1n; k <= n; k++) {
      let coeff = (-1n) ** (k + 1n);
      for (let t of [P(k), P(-k)]) {
        if (n - t >= 0n) {
          partitions[n] += coeff * partitions[n - t];
        }
      }
    }
  }
  return partitions;
}

function solve(n) {
  ways = Array.from({ length: n + 1 }, () => 0n);
  ways[0] = 1n;

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      ways[j] += ways[j - i];
    }
  }

  return ways;
}

let solutions = solve(55375);

for (let i = 0; i < solutions.length; i++) {
  if (solutions[i] % 1_000_000n === 0n) {
    console.log(i);
    console.log(solutions[i].toLocaleString());
    break;
  }
}
