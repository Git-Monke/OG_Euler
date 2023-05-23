function sum_arr(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}

function extend(set, ok, k = ok, p = set[0], s = set[0]) {
  if (p === s + k - 1) {
    return [p, set];
  }

  if (k === 0) {
    return false;
  }

  let min_sum = Infinity;
  let min_set;
  for (let i = set[set.length - 1]; i <= (s + ok - set.length) / (p - 1); i++) {
    let [sum, solution] = extend(set.concat(i), ok, k - 1, p * i, s + i);

    if (sum < min_sum) {
      min_sum = sum;
      min_set = solution;
    }
  }

  return [min_sum, min_set];
}

function k(n) {
  let min_sum = Infinity;
  let best_set;

  let i = 2;
  while (i < min_sum) {
    let [sum, set] = extend([i], n);
    if (set && sum < min_sum) {
      min_sum = sum;
      best_set = set;
    }
    i++;
  }
  return [best_set, min_sum];
}

let solutions = new Set();
for (let i = 2; i <= 12000; i++) {
  let [set, sum] = k(i);
  solutions.add(sum);
  console.log(`k=${i} | {${set.join(",")}} : ${sum}`);
}

console.log(
  "Final solution: " + Array.from(solutions).reduce((p, c) => p + c, 0)
);

// console.log(k(100000));
