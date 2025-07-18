//// BEGIN - PROMPT
/**
 * Given a non-empty list of integers lst, add the even elements that are at odd indices.
 *
 * Examples:
 *   add([4, 2, 6, 7]) ==> 2
 */
function add(lst) {
//// BEGIN - CANONICAL SOLUTION
    return lst.reduce((sum, val, idx) => {
        if (idx % 2 === 1 && val % 2 === 0) {
            return sum + val;
        }
        return sum;
    }, 0);
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate([4, 88]), 88);
    assert.strictEqual(candidate([4, 5, 6, 7, 2, 122]), 122);
    assert.strictEqual(candidate([4, 0, 6, 7]), 0);
    assert.strictEqual(candidate([4, 4, 6, 8]), 12);
    // Check some edge cases that are easy to work out by hand.
}

//// BEGIN - CHECK
check(add);