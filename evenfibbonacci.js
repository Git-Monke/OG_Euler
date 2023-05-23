function evenFib() {
  let n1 = 1;
  let n2 = 2;
  let sum = 2;

  while (n2 < 4_000_000) {
    n2 = n2 + n1;
    n1 = n2 - n1;

    if (n2 % 2 === 0) {
      sum += n2;
    }
  }

  console.log(sum);
}

evenFib();
