//// BEGIN - PROMPT
/**
 * You will be given a number in decimal form and your task is to convert it to
 * binary format. The function should return a string, with each character representing a binary
 * number. Each character in the string will be '0' or '1'.
 *
 * There will be an extra couple of characters 'db' at the beginning and at the end of the string.
 * The extra characters are there to help with the format.
 *
 * Examples:
 * decimalToBinary(15)   // returns "db1111db"
 * decimalToBinary(32)   // returns "db100000db"
 */
function decimalToBinary(decimal) {
//// BEGIN - CANONICAL SOLUTION
  return 'db' + decimal.toString(2) + 'db';
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
  // Check some simple cases
  assert.strictEqual(candidate(0), 'db0db');
  assert.strictEqual(candidate(32), 'db100000db');
  assert.strictEqual(candidate(103), 'db1100111db');
  assert.strictEqual(candidate(15), 'db1111db', 'This prints if this assert fails 1 (good for debugging!)');
  // Check some edge cases that are easy to work out by hand.
  assert.ok(true, 'This prints if this assert fails 2 (also good for debugging!)');
}

//// BEGIN - CHECK
check(decimalToBinary);