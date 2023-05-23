function cont(D) {
  let R = ~~Math.sqrt(D);
  let f = [];
  f.push(R);
  if (R * R === D) {
    return 2;
  }
  let a = R,
    P = 0,
    Q = 1;
  do {
    P = a * Q - P;
    Q = ~~((D - P * P) / Q);
    a = ~~((R + P) / Q);
    f.push(a);
  } while (Q != 1);
  return f;
}

console.log(cont(1345));
