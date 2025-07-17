//// BEGIN - PROMPT
/**
 * Check if two words have the same characters.
 *
 * @param {string} s0
 * @param {string} s1
 * @returns {boolean}
 *
 * @example
 * sameChars('eabcdzzzz', 'dddzzzzzzzddeddabc'); // true
 * sameChars('abcd', 'dddddddabc'); // true
 * sameChars('dddddddabc', 'abcd'); // true
 * sameChars('eabcd', 'dddddddabc'); // false
 * sameChars('abcd', 'dddddddabce'); // false
 * sameChars('eabcdzzzz', 'dddzzzzzzzddddabc'); // false
 */
function sameChars(s0, s1) {
//// BEGIN - CANONICAL SOLUTION
    const set0 = new Set(s0);
    const set1 = new Set(s1);
    if (set0.size !== set1.size) {
        return false;
    }
    for (const ch of set0) {
        if (!set1.has(ch)) {
            return false;
        }
    }
    return true;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate('eabcdzzzz', 'dddzzzzzzzddeddabc'), true);
    assert.strictEqual(candidate('abcd', 'dddddddabc'), true);
    assert.strictEqual(candidate('dddddddabc', 'abcd'), true);
    assert.strictEqual(candidate('eabcd', 'dddddddabc'), false);
    assert.strictEqual(candidate('abcd', 'dddddddabcf'), false);
    assert.strictEqual(candidate('eabcdzzzz', 'dddzzzzzzzddddabc'), false);
    assert.strictEqual(candidate('aabb', 'aaccc'), false);
}

//// BEGIN - CHECK
check(sameChars);