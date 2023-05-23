function is_sorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

function S(n) {
  let beans = [290797];
  for (let i = 1; i < n; i++) {
    beans[i] = (beans[i - 1] * beans[i - 1]) % 50515093;
  }
  return beans;
}

function solve(bowls) {
  let steps = 0;
  while (!is_sorted(bowls)) {
    let i = 0;
    while (i < bowls.length - 1 && bowls[i] <= bowls[i + 1]) {
      i++;
    }
    let beans = Math.ceil((bowls[i] - bowls[i + 1]) / 2);
    bowls[i] -= beans;
    bowls[i + 1] += beans;
    steps += beans;
  }
  return [steps, bowls];
}

function step(bowls) {
  let avg = bowls.pop();
  let i = 1;
  do {
    avg += bowls[bowls.length - i];
    i++;
  } while (avg / i < bowls[bowls.length - i]);
  let whole = ~~(avg / i);
  let remain = avg % whole;
  for (let j = bowls.length; j >= bowls.length - i; j--) {
    bowls[j] = whole + (remain > 0 ? 1 : 0);
    remain--;
  }
  return bowls;
}

console.time("Slow");
console.log(solve(S(6))[1]);
console.timeEnd("Slow");

console.time("Fast");
console.log(step(S(6)));
console.timeEnd("Fast");

// console.time("test1");
// const UB = 10;
// let S = Sn(UB);
// let beans = [];
// let solution = 0;
// for (let N = 0; N < UB - 1; N++) {
//   beans.push(S.splice(1, 1)[0]);
//   let [s, b] = solve(beans);
//   solution += s;
//   beans = b;
//   console.log(beans);
// }

// console.log(solution);
// console.timeEnd("test1");

// console.log(S(6)[5], "\n", solve(S(5))[1], "\n", solve(S(6))[1]);

// const UB = 10;
// console.time("test");
// console.log(solve(Sn(UB))[0]);
// console.timeEnd("test");
