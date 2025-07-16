//// BEGIN - PROMPT
/**
 * Return list with elements incremented by 1.
 * @example
 * incr_list([1, 2, 3]);
 * // returns [2, 3, 4]
 * @example
 * incr_list([5, 3, 5, 2, 3, 3, 9, 0, 123]);
 * // returns [6, 4, 6, 3, 4, 4, 10, 1, 124]
 * @param {number[]} l
 * @returns {number[]}
 */
function incrList(l) {
//// BEGIN - CANONICAL SOLUTION
    return l.map(e => e + 1);
}

//// BEGIN - TEST
const METADATA = {};
const assert = require("assert")

function check(candidate) {
    assert.deepStrictEqual(candidate([]), [])
    assert.deepStrictEqual(candidate([3, 2, 1]), [4, 3, 2])
    assert.deepStrictEqual(candidate([5, 2, 5, 2, 3, 3, 9, 0, 123]), [6, 3, 6, 3, 4, 4, 10, 1, 124])
}

//// BEGIN - CHECK
check(incrList);