let n1 = 1n,
  n2 = 1n,
  nextTerm = 0n;

console.log("Fibonacci Series:");

let i = 2;

while (nextTerm.toString().length < 1000) {
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
  i++;
}

console.log(i);
