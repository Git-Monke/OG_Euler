function sumSlow(max) {
  let sum = 0;

  for (let i = 0; i < max; i++) {
    if (i % 3 === 0) {
      sum += i;
      continue;
    }

    if (i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

function sumFast1(max) {
  let sum = 0;

  for (let i = 0; i < max; i += 3) {
    sum += i;
  }

  for (let i = 0; i < max; i += 5) {
    if (i % 3 === 0) {
      continue;
    }

    sum += i;
  }

  return sum;
}

// m = divisor
// n = number of numbers divisible by the divisor up to the max;
function harmonic(d, m) {
  let n = ~~((m - 1) / d);
  return (n * d * (n + 1)) / 2;
}

// Works for a max up to 150,000,000. To calculate larger sums, BigInt must be used.
function sumFast2(max) {
  return harmonic(3, max) + harmonic(5, max) - harmonic(15, max);
}

function profile(name, func, input, runs) {
  let avg = 0;

  for (let i = 0; i < runs; i++) {
    let start = performance.now();
    func(input);
    avg += performance.now() - start;
  }

  console.log(`${name}: ${(avg / runs).toLocaleString()}ms`);
}

const max = 100_000_000;
const runs = 100;

console.log(`Average of ${runs} runs:`);

profile("Slow sum", sumSlow, max, runs);
profile("Fast sum 1", sumFast1, max, runs);
profile("Fast sum 2", sumFast2, max, runs);

console.log(sumSlow(max));
console.log(sumFast1(max));
console.log(sumFast2(max));
