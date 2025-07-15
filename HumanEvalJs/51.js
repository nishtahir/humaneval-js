//// BEGIN - PROMPT
/**
 * remove_vowels is a function that takes string and returns string without vowels.
 *
 * Examples:
 * remove_vowels('') -> ''
 * remove_vowels("abcdef\nghijklm") -> 'bcdf\nghjklm'
 * remove_vowels('abcdef') -> 'bcdf'
 * remove_vowels('aaaaa') -> ''
 * remove_vowels('aaBAA') -> 'B'
 * remove_vowels('zbcd') -> 'zbcd'
 *
 * @param {string} text
 * @returns {string}
 */
function removeVowels(text) {
//// BEGIN - CANONICAL SOLUTION
    return text
        .split('')
        .filter(s => !['a', 'e', 'i', 'o', 'u'].includes(s.toLowerCase()))
        .join('');
}

//// BEGIN - TEST
const assert = require('assert');
const METADATA = {};

function check(candidate) {
    assert.strictEqual(candidate(''), '');
    assert.strictEqual(candidate("abcdef\nghijklm"), 'bcdf\nghjklm');
    assert.strictEqual(candidate('fedcba'), 'fdcb');
    assert.strictEqual(candidate('eeeee'), '');
    assert.strictEqual(candidate('acBAA'), 'cB');
    assert.strictEqual(candidate('EcBOO'), 'cB');
    assert.strictEqual(candidate('ybcd'), 'ybcd');
}

//// BEGIN - CHECK
check(removeVowels);