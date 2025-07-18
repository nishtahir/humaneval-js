//// BEGIN - PROMPT
/**
 * Given list of integers, return list in strange order.
 * Strange sorting, is when you start with the minimum value,
 * then maximum of the remaining integers, then minimum and so on.
 *
 * Examples:
 * strangeSortList([1, 2, 3, 4]) == [1, 4, 2, 3]
 * strangeSortList([5, 5, 5, 5]) == [5, 5, 5, 5]
 * strangeSortList([]) == []
 */
function strangeSortList(lst) {
//// BEGIN - CANONICAL SOLUTION
    const res = [];
    let toggle = true;
    const arr = lst.slice();
    while (arr.length > 0) {
        const val = toggle ? Math.min(...arr) : Math.max(...arr);
        res.push(val);
        arr.splice(arr.indexOf(val), 1);
        toggle = !toggle;
    }
    return res;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate([1, 2, 3, 4]), [1, 4, 2, 3]);
    assert.deepStrictEqual(candidate([5, 6, 7, 8, 9]), [5, 9, 6, 8, 7]);
    assert.deepStrictEqual(candidate([1, 2, 3, 4, 5]), [1, 5, 2, 4, 3]);
    assert.deepStrictEqual(candidate([5, 6, 7, 8, 9, 1]), [1, 9, 5, 8, 6, 7]);
    assert.deepStrictEqual(candidate([5, 5, 5, 5]), [5, 5, 5, 5]);
    assert.deepStrictEqual(candidate([]), []);
    assert.deepStrictEqual(candidate([1,2,3,4,5,6,7,8]), [1, 8, 2, 7, 3, 6, 4, 5]);
    assert.deepStrictEqual(candidate([0,2,2,2,5,5,-5,-5]), [-5, 5, -5, 5, 0, 2, 2, 2]);
    assert.deepStrictEqual(candidate([111111]), [111111]);
    // Check some edge cases that are easy to work out by hand.
    assert(true);
}

//// BEGIN - CHECK
check(strangeSortList);