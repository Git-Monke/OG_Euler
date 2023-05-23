const BigDecimal = require("js-big-decimal");
const two = new BigDecimal("2");

function newton_raphson(x) {
  x0 = new BigDecimal(x);
  x1 = new BigDecimal(x).divide(two);

  for (let i = 0; i < 10; i++) {
    x1 = x1.subtract(
      x1.multiply(x1).subtract(x0).divide(two.multiply(x1), 150)
    );
  }

  return x1.getValue();
}

function sum(n) {
  let digits = newton_raphson(n)
    .split(".")[1]
    .slice(0, 100)
    .split("")
    .reduce((p, c) => p + parseInt(c), 0);
  console.log(digits);
}

console.log(sum(2));
