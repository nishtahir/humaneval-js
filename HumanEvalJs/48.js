const assert = require('assert');

//// BEGIN - PROMPT
/**
 * Checks if given string is a palindrome
 * @param {string} text
 * @returns {boolean}
 * @example
 * is_palindrome('');
 * // returns true
 * is_palindrome('aba');
 * // returns true
 * is_palindrome('aaaaa');
 * // returns true
 * is_palindrome('zbcd');
 * // returns false
 */
function is_palindrome(text) {
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
check(is_palindrome);