function shortest(A, B, C) {
  let S = Math.min(A, B);
  let L = Math.max(A, B);
  return Math.sqrt((S + C) * (S + C) + L * L);
}

const UB = 1000000;

let M = 0;
let count = 0;

console.time("Time taken");
solve: while (count < UB) {
  M++;
  for (let B = 1; B <= M; B++) {
    for (let C = 1; C <= B; C++) {
      if (Number.isInteger(shortest(M, B, C))) {
        count++;

        if (count > UB) {
          break solve;
        }
      }
    }
  }
}
console.timeEnd("Time taken");

console.log(M);
