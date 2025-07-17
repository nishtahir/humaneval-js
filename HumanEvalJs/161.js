//// BEGIN - PROMPT
/**
 * You are given a string s.
 * if s[i] is a letter, reverse its case from lower to upper or vise versa,
 * otherwise keep it as it is.
 * If the string contains no letters, reverse the string.
 * The function should return the resulted string.
 * Examples
 * solve("1234") = "4321"
 * solve("ab") = "AB"
 * solve("#a@C") = "#A@c"
 * @param {string} s
 * @returns {string}
 */
function solve(s) {
//// BEGIN - CANONICAL SOLUTION
    let flg = 0;
    const newStr = s.split('');
    for (let idx = 0; idx < s.length; idx++) {
        const ch = s[idx];
        if (/[a-zA-Z]/.test(ch)) {
            newStr[idx] = ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase();
            flg = 1;
        }
    }
    const result = newStr.join('');
    if (flg === 0) {
        return result.split('').reverse().join('');
    }
    return result;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate("AsDf"), "aSdF");
    assert.strictEqual(candidate("1234"), "4321");
    assert.strictEqual(candidate("ab"), "AB");
    assert.strictEqual(candidate("#a@C"), "#A@c");
    assert.strictEqual(candidate("#AsdfW^45"), "#aSDFw^45");
    assert.strictEqual(candidate("#6@2"), "2@6#");
    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate("#$a^D"), "#$A^d");
    assert.strictEqual(candidate("#ccc"), "#CCC");
}

//// BEGIN - CHECK
check(solve);