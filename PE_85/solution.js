function f(n) {
  let prod = 1;
  for (let i = 2; i <= n; i++) {
    prod *= i;
  }
  return prod;
}

function choose(n, k) {
  return f(n) / (f(k) * f(n - k));
}

function recs(a, b) {
  return choose(a + 1, 2) * choose(b + 1, 2);
}

let a = 0;
let current = 0;
let best_area = 0;
let solution_set = [0, 0];
let smallest_dist = Infinity;

let start = performance.now();
while (recs(a, 1) < 2e6) {
  a++;
  for (let b = 1; b < a; b++) {
    current = recs(a, b);

    if (Math.abs(2e6 - current) < smallest_dist) {
      best_area = a * b;
      solution_set = [a, b];
      smallest_dist = Math.abs(2e6 - current);
    }

    if (current > 2e6) {
      break;
    }
  }
}
let end = performance.now();

console.log(
  "Solution: " + solution_set[0] + "x" + solution_set[1] + " rectangle"
);
console.log("Area of " + best_area.toLocaleString());
console.log("Solve time: " + (end - start).toLocaleString() + "ms");
