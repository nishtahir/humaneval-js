//// BEGIN - PROMPT
/**
 * Checks if given string is a palindrome
 * @param {string} text
 * @returns {boolean}
 * @example
 * isPalindrome('');
 * // returns true
 * isPalindrome('aba');
 * // returns true
 * isPalindrome('aaaaa');
 * // returns true
 * isPalindrome('zbcd');
 * // returns false
 */
function isPalindrome(text) {
//// BEGIN - CANONICAL SOLUTION
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== text[text.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate(''), true);
    assert.strictEqual(candidate('aba'), true);
    assert.strictEqual(candidate('aaaaa'), true);
    assert.strictEqual(candidate('zbcd'), false);
    assert.strictEqual(candidate('xywyx'), true);
    assert.strictEqual(candidate('xywyz'), false);
    assert.strictEqual(candidate('xywzx'), false);
}

//// BEGIN - CHECK
check(isPalindrome);