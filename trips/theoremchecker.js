function num_trips(max) {
  let trips = new Set();
  for (let m = 2; m < Math.sqrt(max / 2); m++) {
    for (let n = 1; n < m; n++) {
      let a = 2 * m * n;
      let c = m * m + n * n;
      let sum = c + a + Math.sqrt(c * c - a * a);
      if (max % sum === 0) {
        let k = max / sum;

        // if (!trips.has(c * k)) {
        //   console.log(a * k, Math.sqrt(c * c - a * a) * k, c * k);
        // }

        trips.add(c * k);
      }
    }
  }
  return trips;
}

// let best_tris = 0;
// let best_value = 0;

// console.time("test");
// for (let i = 1; i <= 100_000; i++) {
//   let triplets = num_trips(i).size;
//   if (triplets >= best_tris) {
//     console.log(i);
//     best_tris = triplets;
//     best_value = i;
//   }
// }
// console.timeEnd("test");

// console.log(`Solution: P = ${best_value}, with ${best_tris} triangles.`);

// console.time("Original solution");
// num_trips(1_000_000);
// console.timeEnd("Original solution");

// let time = 0;
// let runs = 10_000;
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

console.time("test");
console.log(num_trips(1_000_000).size);
console.timeEnd("test");
