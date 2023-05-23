function cont(D, p) {
  let R = BigInt(~~Math.sqrt(D));
  D = BigInt(D);
  let f = [];
  f.push(R);
  if (R * R === D) {
    return f;
  }
  let a = R,
    P = 0n,
    Q = 1n;
  for (let i = 0; i < p; i++) {
    P = a * Q - P;
    Q = ~~((D - P * P) / Q);
    a = ~~((R + P) / Q);
    f.push(a);
  }
  return f;
}

function reduce(c) {
  let n = 1n;
  let d = c.pop();
  while (c.length) {
    let digit = c.pop();
    let t = n + digit * d;
    n = d;
    d = t;
  }
  return [d, n];
}

function solve(D) {
  let x = 1n;
  let y = 1n;
  let i = 1n;
  let bigD = BigInt(D); // Lol
  while (x * x - bigD * y * y !== 1n) {
    [x, y] = reduce(cont(D, i));
    i++;
  }
  return [x, y];
}

// let start = performance.now();
// let solution = 0n;
// let solutionD = 0;
// for (let D = 1; D < 100000; D++) {
//   if (Number.isInteger(Math.sqrt(D))) {
//     continue;
//   }
//   console.log(D);

//   let sol = solve(D);
//   if (sol[0] > solution) {
//     solution = sol[0];
//     console.log(sol);
//     solutionD = D;
//   }
// }
// let end = performance.now();

// console.log(
//   "Solution is " + solutionD + " with an x of " + solution.toLocaleString()
// );
// console.log("Solve time " + ((end - start) / 1000).toLocaleString() + "ms");

for (let i = 1; i < 10; i++) {
  console.log(reduce(cont(2, i)));
}
