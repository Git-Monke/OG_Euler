let ones = [
  0,
  "one".length,
  "two".length,
  "three".length,
  "four".length,
  "five".length,
  "six".length,
  "seven".length,
  "eight".length,
  "nine".length,
  "ten".length,
  "eleven".length,
  "twelve".length,
  "thirteen".length,
  "fourteen".length,
  "fifteen".length,
  "sixteen".length,
  "seventeen".length,
  "eighteen".length,
  "nineteen".length,
];

// tenth prefixes
let tens = [
  "twenty".length,
  "thirty".length,
  "forty".length,
  "fifty".length,
  "sixty".length,
  "seventy".length,
  "eighty".length,
  "ninety".length,
];

function count(n) {
  if (n < 20) {
    return ones[n];
  }

  if (n < 100) {
    return tens[Math.floor(n * 0.1) - 2] + ones[n % 10];
  }

  if (n === 1000) {
    return "onethousand".length;
  }

  let hundred = Math.floor(n * 0.01);
  let ten = Math.floor(n * 0.1) % 10;
  let one = n % 10;
  return (
    7 +
    ones[hundred] +
    (ten < 2 ? ones[n % 100] : tens[ten - 2] + ones[one]) +
    (ten + one !== 0 ? 3 : 0)
  );
}

let solution = Array.from({ length: 1000 }, (_, v) => v + 1).reduce(
  (p, c) => p + count(c),
  0
);
console.log(count(321));
console.log("threehundredtwentyone".length);
console.log(solution);
