const fs = require("fs");

let keys = {
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

function count(list, value) {
  return list.reduce((p, c) => p + (c === value), 0);
}

function score_hand(h) {
  let cards = h.split(" ");
  let values = cards.map((c) => c.charAt(0)).map((c) => parseInt(c) || keys[c]);
  let suits = cards.map((c) => c.charAt(1));
  let occurences = values.map((v) => count(values, v));

  let has_pair = occurences.includes(2);
  let pairs = count(occurences, 2) / 2;

  let has_triplet = occurences.includes(3);
  let has_four = occurences.includes(4);

  let has_flush = count(suits, suits[0]) === 5;
  let copy = [...values].sort();
  let has_straight = copy.every((e, i) => i === 0 || e - copy[i - 1] === 1);

  let highest_card = values.reduce((p, c) => Math.max(p, c));

  if (has_straight && has_flush && highest_card === 14) {
    return 1e19;
  }

  if (has_straight && has_flush) {
    return 1e17 * highest_card;
  }

  if (has_four) {
    return 1e15 * values[occurences.indexOf(4)];
  }

  if (has_triplet && has_pair) {
    return (
      1e13 *
      Math.max(values[occurences.indexOf(3)], values[occurences.indexOf(2)])
    );
  }

  if (has_flush) {
    return 1e11 * highest_card;
  }

  if (has_straight) {
    return 1e9 * highest_card;
  }

  if (has_triplet) {
    return 1e7 * values[occurences.indexOf(3)];
  }

  if (pairs === 2) {
    values.splice(occurences.indexOf(1), 1);
    return 1e5 * values.reduce((p, c) => Math.max(p, c));
  }

  if (has_pair) {
    console.log(values, occurences);
    return 100 * values[occurences.indexOf(2)];
  }

  return highest_card;
}

let data = fs
  .readFileSync("p054_poker.txt")
  .toString()
  .split("\n")
  .map((e) => [e.slice(0, 14), e.slice(-14)]);

console.log(data);
let solution = 0;
data.forEach((hand) => {
  console.log(hand);
  if (score_hand(hand[0]) > score_hand(hand[1])) {
    solution++;
  }
});
console.log(solution);
