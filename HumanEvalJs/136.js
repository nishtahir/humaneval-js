//// BEGIN - PROMPT
/**
 * Create a function that returns an array [a, b], where 'a' is
 * the largest of negative integers, and 'b' is the smallest
 * of positive integers in an array.
 * If there is no negative or positive integers, return them as null.
 *
 * Examples:
 * largestSmallestIntegers([2, 4, 1, 3, 5, 7]) // [null, 1]
 * largestSmallestIntegers([]) // [null, null]
 * largestSmallestIntegers([0]) // [null, null]
 */
function largestSmallestIntegers(lst) {
//// BEGIN - CANONICAL SOLUTION
    const negatives = lst.filter(x => x < 0);
    const positives = lst.filter(x => x > 0);
    const a = negatives.length ? Math.max(...negatives) : null;
    const b = positives.length ? Math.min(...positives) : null;
    return [a, b];
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate([2, 4, 1, 3, 5, 7]), [null, 1]);
    assert.deepStrictEqual(candidate([2, 4, 1, 3, 5, 7, 0]), [null, 1]);
    assert.deepStrictEqual(candidate([1, 3, 2, 4, 5, 6, -2]), [-2, 1]);
    assert.deepStrictEqual(candidate([4, 5, 3, 6, 2, 7, -7]), [-7, 2]);
    assert.deepStrictEqual(candidate([7, 3, 8, 4, 9, 2, 5, -9]), [-9, 2]);
    assert.deepStrictEqual(candidate([]), [null, null]);
    assert.deepStrictEqual(candidate([0]), [null, null]);
    assert.deepStrictEqual(candidate([-1, -3, -5, -6]), [-1, null]);
    assert.deepStrictEqual(candidate([-1, -3, -5, -6, 0]), [-1, null]);
    assert.deepStrictEqual(candidate([-6, -4, -4, -3, 1]), [-3, 1]);
    assert.deepStrictEqual(candidate([-6, -4, -4, -3, -100, 1]), [-3, 1]);
    // Check some edge cases that are easy to work out by hand.
    assert.ok(true);
}

//// BEGIN - CHECK
check(largestSmallestIntegers);