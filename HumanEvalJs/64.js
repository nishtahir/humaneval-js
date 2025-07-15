//// BEGIN - PROMPT
const FIX = `
Add more test cases.
`;

/**
 * Write a function vowels_count which takes a string representing
 * a word as input and returns the number of vowels in the string.
 * Vowels in this case are 'a', 'e', 'i', 'o', 'u'. Here, 'y' is also a
 * vowel, but only when it is at the end of the given word.
 *
 * Example:
 * >>> vowels_count("abcde")
 * 2
 * >>> vowels_count("ACEDY")
 * 3
 */
function vowels_count(s) {
//// BEGIN - CANONICAL SOLUTION
  const vowels = 'aeiouAEIOU';
  let n_vowels = 0;
  for (const c of s) {
    if (vowels.includes(c)) {
      n_vowels++;
    }
  }
  const last = s[s.length - 1];
  if (last === 'y' || last === 'Y') {
    n_vowels++;
  }
  return n_vowels;
}

//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
  // Check some simple cases
  assert.strictEqual(candidate("abcde"), 2, "Test 1");
  assert.strictEqual(candidate("Alone"), 3, "Test 2");
  assert.strictEqual(candidate("key"), 2, "Test 3");
  assert.strictEqual(candidate("bye"), 1, "Test 4");
  assert.strictEqual(candidate("keY"), 2, "Test 5");
  assert.strictEqual(candidate("bYe"), 1, "Test 6");
  assert.strictEqual(candidate("ACEDY"), 3, "Test 7");

  // Check some edge cases that are easy to work out by hand.
  assert.ok(true, "This prints if this assert fails 2 (also good for debugging!)");
}

//// BEGIN - CHECK
check(vowels_count);