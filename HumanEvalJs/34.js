const assert = require('assert');

//// BEGIN - PROMPT
/**
 * Return sorted unique elements in a list
 * @param {Array<number>} l - list of numbers
 * @returns {Array<number>} sorted unique elements
 * @example
 * unique([5, 3, 5, 2, 3, 3, 9, 0, 123]);
 * // returns [0, 2, 3, 5, 9, 123]
 */
function unique(l) {
//// BEGIN - CANONICAL SOLUTION
    return Array.from(new Set(l)).sort((a, b) => a - b);
}

//// BEGIN - TEST
const METADATA = {};

function check(candidate) {
    assert.deepStrictEqual(candidate([5, 3, 5, 2, 3, 3, 9, 0, 123]), [0, 2, 3, 5, 9, 123]);
}

//// BEGIN - CHECK
check(unique);