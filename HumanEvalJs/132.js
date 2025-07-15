//// BEGIN - PROMPT
/**
 * Create a function that takes a string as input which contains only square brackets.
 * The function should return true if and only if there is a valid subsequence of brackets 
 * where at least one bracket in the subsequence is nested.
 *
 * Examples:
 *   is_nested('[[]]') ➞ true
 *   is_nested('[]]]]]]][[[[[]') ➞ false
 *   is_nested('[][]') ➞ false
 *   is_nested('[]') ➞ false
 *   is_nested('[[][]]') ➞ true
 *   is_nested('[[]][[') ➞ true
 */
//// BEGIN - CANONICAL SOLUTION
/**
 * @param {string} string
 * @returns {boolean}
 */
function is_nested(string) {
    const openingBracketIndex = [];
    const closingBracketIndex = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '[') {
            openingBracketIndex.push(i);
        } else {
            closingBracketIndex.push(i);
        }
    }
    closingBracketIndex.reverse();
    let cnt = 0;
    let j = 0;
    const l = closingBracketIndex.length;
    for (const idx of openingBracketIndex) {
        if (j < l && idx < closingBracketIndex[j]) {
            cnt++;
            j++;
        }
    }
    return cnt >= 2;
}
//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate('[[]]'), true, 'This prints if this assert fails 1 (good for debugging!)');
    assert.strictEqual(candidate('[]]]]]]][[[[[]'), false);
    assert.strictEqual(candidate('[][]'), false);
    assert.strictEqual(candidate('[]'), false);
    assert.strictEqual(candidate('[[[[]]]]'), true);
    assert.strictEqual(candidate('[]]]]]]]]]]'), false);
    assert.strictEqual(candidate('[][][[]]'), true);
    assert.strictEqual(candidate('[[]'), false);
    assert.strictEqual(candidate('[]]'), false);
    assert.strictEqual(candidate('[[]][['), true);
    assert.strictEqual(candidate('[[][]]'), true);

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate(''), false, 'This prints if this assert fails 2 (also good for debugging!)');
    assert.strictEqual(candidate('[[[[[[[['), false);
    assert.strictEqual(candidate(']]]]]]]]'), false);
}
//// BEGIN - CHECK
check(is_nested);