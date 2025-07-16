//// BEGIN - PROMPT
/**
 * Concatenate list of strings into a single string.
 *
 * @param {string[]} strings - Array of strings to concatenate.
 * @returns {string} Concatenated string.
 * @example
 * // returns ''
 * concatenate([]);
 * @example
 * // returns 'abc'
 * concatenate(['a', 'b', 'c']);
 */
function concatenate(strings) {
//// BEGIN - CANONICAL SOLUTION
    return strings.join('');
}

//// BEGIN - TEST
const METADATA = { author: 'jt', dataset: 'test' };

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate([]), '');
    assert.strictEqual(candidate(['x', 'y', 'z']), 'xyz');
    assert.strictEqual(candidate(['x', 'y', 'z', 'w', 'k']), 'xyzwk');
}
//// BEGIN - CHECK
check(concatenate);