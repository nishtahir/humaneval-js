//// BEGIN - PROMPT
/**
 * Return length of given string
 * @param {string} string
 * @returns {number}
 * @example
 * strlen('');
 * // => 0
 * strlen('abc');
 * // => 3
 */
function strlen(string) {
//// BEGIN - CANONICAL SOLUTION
    return string.length;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate(''), 0);
    assert.strictEqual(candidate('x'), 1);
    assert.strictEqual(candidate('asdasnakj'), 9);
}

//// BEGIN - CHECK
check(strlen);