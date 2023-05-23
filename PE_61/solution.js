const P = [
  (n) => n * (n + 1) * 0.5,
  (n) => n * n,
  (n) => n * (3 * n - 1) * 0.5,
  (n) => n * (2 * n - 1),
  (n) => n * (5 * n - 3) * 0.5,
  (n) => n * (3 * n - 2),
];

let candidate_sets = Array.from({ length: P.length }, (_, i) => {
  let set = [];
  let func = P[i];
  let n = 1;
  while (func(n) < 10_000) {
    let num = func(n);
    if (num > 999 && num < 10_000 && ~~(num / 10) % 10 !== 0) {
      set.push(num);
    }
    n++;
  }
  return set;
});

let octagonal = candidate_sets.splice(candidate_sets.length - 1, 1)[0];

function extend(found, sets) {
  if (found.length > 5) {
    return found;
  }

  let target_digits = found[found.length - 1] % 100;

  for (let i = 0; i < sets.length; i++) {
    let set = sets[i];
    let other_sets = sets.slice();
    other_sets.splice(i, 1);

    for (let j = 0; j < set.length; j++) {
      let current = set[j];

      if (~~(current / 100) === target_digits) {
        let new_set = found.slice();
        new_set.push(current);
        let solution = extend(new_set, other_sets);

        if (solution && ~~(solution[0] / 100) === solution[5] % 100) {
          console.log(solution);
          console.log(solution.reduce((p, c) => p + c, 0));
          return true;
        }
      }
    }
  }

  return false;
}

let start = performance.now();
for (let i = 0; i < octagonal.length; i++) {
  let success = extend([octagonal[i]], candidate_sets);

  if (success) {
    break;
  }
}
console.log(performance.now() - start + "ms");
