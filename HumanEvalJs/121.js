//// BEGIN - PROMPT
/**
 * Given a non-empty array of integers, return the sum of all of the odd elements that are in even positions.
 *
 * Examples:
 * solution([5, 8, 7, 1]) ==> 12
 * solution([3, 3, 3, 3, 3]) ==> 9
 * solution([30, 13, 24, 321]) ==> 0
 *
 * @param {number[]} lst
 * @returns {number}
 */
function solution(lst) {
//// BEGIN - CANONICAL SOLUTION
    return lst.reduce((sum, x, idx) => (idx % 2 === 0 && x % 2 === 1 ? sum + x : sum), 0);
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate([5, 8, 7, 1]), 12);
    assert.strictEqual(candidate([3, 3, 3, 3, 3]), 9);
    assert.strictEqual(candidate([30, 13, 24, 321]), 0);
    assert.strictEqual(candidate([5, 9]), 5);
    assert.strictEqual(candidate([2, 4, 8]), 0);
    assert.strictEqual(candidate([30, 13, 23, 32]), 23);
    assert.strictEqual(candidate([3, 13, 2, 9]), 3);
}

//// BEGIN - CHECK
check(solution)