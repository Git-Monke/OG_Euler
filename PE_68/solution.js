function f(n) {
  let f = 1;
  while (n > 0) {
    f *= n;
    n--;
  }
  return f;
}

function perm(n) {
  let perm_n = n - 1;
  let digits = Array(10)
    .fill(null)
    .map((_, i) => 1 + i);
  let result = [];
  for (let i = 9; i >= 0; i--) {
    let factorial = f(i);
    let bucket = ~~(perm_n / factorial);
    let digit = digits[bucket];
    digits.splice(bucket, 1);
    perm_n -= bucket * factorial;
    result.push(digit);
  }
  return result;
}

console.time("test");
let order = [0, 1, 2, 3, 2, 4, 5, 4, 6, 7, 6, 8, 9, 8, 1];
for (let i = f(10); i > 0; i--) {
  let p = perm(i);
  let r1 = p[0] + p[1] + p[2];
  let r2 = p[3] + p[2] + p[4];
  let r3 = p[5] + p[4] + p[6];
  let r4 = p[8] + p[6] + p[7];
  let r5 = p[9] + p[8] + p[1];
  if (
    r1 === r2 &&
    r3 === r4 &&
    r1 === r3 &&
    r1 === r5 &&
    p[0] < Math.min(p[3], p[5], p[7], p[9])
  ) {
    let sol = "";
    for (let i = 0; i < order.length; i++) {
      sol += p[order[i]].toString();
    }
    if (sol.length === 16) {
      console.log(parseInt(sol));
      break;
    }
  }
}
console.timeEnd("test");
