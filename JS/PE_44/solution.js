function is_pentagonal(n) {
  return Number.isInteger((1 + Math.sqrt(24 * n + 1)) / 6);
}

function is_hexagonal(n) {
  return Number.isInteger((1 + Math.sqrt(8 * n + 1)) / 4);
}

function t(n) {
  return n * (n + 1) * 0.5;
}

for (let i = 286; i < 100_000; i++) {
  let ti = t(i);
  if (is_hexagonal(ti) && is_pentagonal(ti)) {
    console.log(i, ti);
    break;
  }
}
