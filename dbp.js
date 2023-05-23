// Checks for base 10 palindromes
function dp(n) {
  n = n.toString();
  let h = n.length - 1;
  let l = 0;

  while (l < h) {
    if (n[l] !== n[h]) {
      return false;
    }

    l++;
    h--;
  }

  return true;
}

// Generates all binary palindromes n digits long
function gen_bp(n) {
  let digits = Math.ceil(n * 0.5);
  let ub = 2 ** digits - 1;
  let bin = 1;
  let palindromes = [];

  while (bin <= ub) {
    let temp = bin;
    let result = 0;

    for (let i = 0; i < digits; i++) {
      result <<= 1;
      result |= temp & 1;
      temp >>= 1;
    }

    palindromes.push(bin | (result << ~~(n * 0.5)));
    bin += 2;
  }

  return palindromes;
}

function solve(upper_bound) {
  let binary_ub = ~~Math.log2(upper_bound) + 1;
  let sum = 0;

  for (let i = 1; i <= binary_ub; i++) {
    let palindromes = gen_bp(i);

    for (let palindrome of palindromes) {
      if (dp(palindrome) && palindrome <= upper_bound) {
        sum += palindrome;
      }
    }
  }

  return sum;
}

console.log(solve(1_000_000));
