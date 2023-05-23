function reverse(n) {
  return BigInt(n.toString().split("").reverse().join(""));
}

function is_palindrome(n) {
  return n === reverse(n);
}

function test(n) {
  let i = 0;
  do {
    n += reverse(n);
    i++;
  } while (i < 50 && !is_palindrome(n));
  return i >= 50;
}

let solution = 0;
for (let i = 1n; i < 10000n; i++) {
  solution += test(i);
}
console.log(solution);
