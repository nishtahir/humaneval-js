//// BEGIN - PROMPT
/**
 * You are given a string s.
 * Your task is to check if the string is happy or not.
 * A string is happy if its length is at least 3 and every 3 consecutive letters are distinct
 * For example:
 * is_happy(a) => False
 * is_happy(aa) => False
 * is_happy(abcd) => True
 * is_happy(aabb) => False
 * is_happy(adb) => True
 * is_happy(xyy) => False
 */

/**
 * @param {string} s
 * @returns {boolean}
 */
function is_happy(s) {
  if (s.length < 3) {
    return false;
  }
  for (let i = 0; i < s.length - 2; i++) {
    if (s[i] === s[i+1] || s[i+1] === s[i+2] || s[i] === s[i+2]) {
      return false;
    }
  }
  return true;
}

//// BEGIN - TEST
const assert = require('assert');

function check(candidate) {
  assert.strictEqual(candidate("a"), false, "a");
  assert.strictEqual(candidate("aa"), false, "aa");
  assert.strictEqual(candidate("abcd"), true, "abcd");
  assert.strictEqual(candidate("aabb"), false, "aabb");
  assert.strictEqual(candidate("adb"), true, "adb");
  assert.strictEqual(candidate("xyy"), false, "xyy");
  assert.strictEqual(candidate("iopaxpoi"), true, "iopaxpoi");
  assert.strictEqual(candidate("iopaxioi"), false, "iopaxioi");
}

//// BEGIN - CHECK
check(is_happy);