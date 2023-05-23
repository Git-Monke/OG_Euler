console.log("hello world");

function num_trips(max) {
  let trips = 0;
  for (let a = 2; a < max / 2; a++) {
    let b = (max * (max - 2 * a)) / (2 * (max - a));

    if (Number.isInteger(b)) {
      trips++;
    }
  }

  return trips * 0.5;
}
let solution = 0;
let sol_trips = 0;
for (let i = 2; i < 1_000; i += 2) {
  let trips = num_trips(i);

  if (trips >= sol_trips) {
    solution = i;
    sol_trips = trips;
  }
}
console.log(solution);

// let time = 0;
// let runs = 1_000;
// let ub = 1_000_000;

// for (let i = 0; i < runs; i++) {
//   let rand = Math.floor(ub * Math.random());
//   let start = performance.now();
//   num_trips(rand);
//   let end = performance.now() - start;
//   time += end;
// }

// console.log(
//   `Average solve time of ${runs} runs: ${(time / runs).toLocaleString()}ms`
// );

// console.log(num_trips(720720));
