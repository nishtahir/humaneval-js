const assert = require('assert');

//// BEGIN - PROMPT
/**
 * You are given two positive integers n and m, and your task is to compute the
 * average of the integers from n through m (including n and m).
 * Round the answer to the nearest integer and convert that to binary.
 * If n is greater than m, return -1.
 * Example:
 * roundedAvg(1, 5) => "0b11"
 * roundedAvg(7, 5) => -1
 * roundedAvg(10, 20) => "0b1111"
 * roundedAvg(20, 33) => "0b11010"
 * @param {number} n
 * @param {number} m
 * @returns {string|number} The rounded average as a binary string with '0b' prefix, or -1 if n > m.
 */
function roundedAvg(n, m) {
  //// BEGIN - CANONICAL SOLUTION
  if (m < n) return -1;
  let summation = 0;
  for (let i = n; i <= m; i++) {
    summation += i;
  }
  const count = m - n + 1;
  const avg = summation / count;
  // Python-style round: ties to even
  const fl = Math.floor(avg);
  const diff = avg - fl;
  let rounded;
  if (diff < 0.5) {
    rounded = fl;
  } else if (diff > 0.5) {
    rounded = fl + 1;
  } else {
    rounded = fl % 2 === 0 ? fl : fl + 1;
  }
  return '0b' + rounded.toString(2);
}

//// BEGIN - TEST
function check(candidate) {
  // Check some simple cases
  assert.strictEqual(candidate(1, 5), "0b11");
  assert.strictEqual(candidate(7, 13), "0b1010");
  assert.strictEqual(candidate(964, 977), "0b1111001010");
  assert.strictEqual(candidate(996, 997), "0b1111100100");
  assert.strictEqual(candidate(560, 851), "0b1011000010");
  assert.strictEqual(candidate(185, 546), "0b101101110");
  assert.strictEqual(candidate(362, 496), "0b110101101");
  assert.strictEqual(candidate(350, 902), "0b1001110010");
  assert.strictEqual(candidate(197, 233), "0b11010111");

  // Check some edge cases that are easy to work out by hand.
  assert.strictEqual(candidate(7, 5), -1);
  assert.strictEqual(candidate(5, 1), -1);
  assert.strictEqual(candidate(5, 5), "0b101");
}

//// BEGIN - CHECK
check(roundedAvg);