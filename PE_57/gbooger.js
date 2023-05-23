function uhgjfm(max) {
  let returnVal = 0;
  let a = 3n;
  let b = 2n;
  for (let i = 0; i < max; i++) {
    a += 2n * b;
    b = a - b;
    if (a.toString().length > b.toString().length) {
      returnVal++;
    }
  }
  return returnVal;
}

console.log(uhgjfm(1000));
