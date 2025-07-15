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

function check(candidate) {
    if (candidate('eabcdzzzz', 'dddzzzzzzzddeddabc') !== true) {
        throw new Error("Test failed: sameChars('eabcdzzzz', 'dddzzzzzzzddeddabc') should return true");
    }
    if (candidate('abcd', 'dddddddabc') !== true) {
        throw new Error("Test failed: sameChars('abcd', 'dddddddabc') should return true");
    }
    if (candidate('dddddddabc', 'abcd') !== true) {
        throw new Error("Test failed: sameChars('dddddddabc', 'abcd') should return true");
    }
    if (candidate('eabcd', 'dddddddabc') !== false) {
        throw new Error("Test failed: sameChars('eabcd', 'dddddddabc') should return false");
    }
    if (candidate('abcd', 'dddddddabcf') !== false) {
        throw new Error("Test failed: sameChars('abcd', 'dddddddabcf') should return false");
    }
    if (candidate('eabcdzzzz', 'dddzzzzzzzddddabc') !== false) {
        throw new Error("Test failed: sameChars('eabcdzzzz', 'dddzzzzzzzddddabc') should return false");
    }
    if (candidate('aabb', 'aaccc') !== false) {
        throw new Error("Test failed: sameChars('aabb', 'aaccc') should return false");
    }
}

//// BEGIN - CHECK
check(sameChars);