//// BEGIN - PROMPT
/**
 * Given a string s, count the number of uppercase vowels in even indices.
 *
 * For example:
 * count_upper('aBCdEf') returns 1
 * count_upper('abcdefg') returns 0
 * count_upper('dBBE') returns 0
 *
 * @param {string} s - input string
 * @returns {number} count of uppercase vowels at even positions
 */
//// BEGIN - CANONICAL SOLUTION
function count_upper(s) {
    let count = 0;
    for (let i = 0; i < s.length; i += 2) {
        if ("AEIOU".includes(s[i])) {
            count++;
        }
    }
    return count;
}
//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    assert.strictEqual(candidate('aBCdEf'), 1);
    assert.strictEqual(candidate('abcdefg'), 0);
    assert.strictEqual(candidate('dBBE'), 0);
    assert.strictEqual(candidate('B'), 0);
    assert.strictEqual(candidate('U'), 1);
    assert.strictEqual(candidate(''), 0);
    assert.strictEqual(candidate('EEEE'), 2);
    // Check some edge cases that are easy to work out by hand.
    return true;
}
//// BEGIN - CHECK
check(count_upper);
console.log("All tests passed.");