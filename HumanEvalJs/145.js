//// BEGIN - PROMPT
/**
 * Write a function which sorts the given array of integers
 * in ascending order according to the sum of their digits.
 * Note: if there are several items with similar sum of their digits,
 * order them based on their index in original array.
 *
 * @param {number[]} nums
 * @returns {number[]}
 *
 * @example
 * order_by_points([1, 11, -1, -11, -12]); // [-1, -11, 1, -12, 11]
 */
function order_by_points(nums) {
//// BEGIN - CANONICAL SOLUTION
    function digits_sum(n) {
        let neg = 1;
        if (n < 0) {
            n = -n;
            neg = -1;
        }
        const digits = String(n).split('').map(d => parseInt(d, 10));
        if (digits.length > 0) {
            digits[0] *= neg;
        }
        return digits.reduce((acc, cur) => acc + cur, 0);
    }
    return nums
        .map((n, i) => ({ value: n, index: i, points: digits_sum(n) }))
        .sort((a, b) => a.points - b.points || a.index - b.index)
        .map(item => item.value);
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate([1, 11, -1, -11, -12]), [-1, -11, 1, -12, 11]);
    assert.deepStrictEqual(
        candidate([1234,423,463,145,2,423,423,53,6,37,3457,3,56,0,46]),
        [0, 2, 3, 6, 53, 423, 423, 423, 1234, 145, 37, 46, 56, 463, 3457]
    );
    assert.deepStrictEqual(candidate([]), []);
    assert.deepStrictEqual(
        candidate([1, -11, -32, 43, 54, -98, 2, -3]),
        [-3, -32, -98, -11, 1, 2, 43, 54]
    );
    assert.deepStrictEqual(
        candidate([1,2,3,4,5,6,7,8,9,10,11]),
        [1, 10, 2, 11, 3, 4, 5, 6, 7, 8, 9]
    );
    assert.deepStrictEqual(candidate([0,6,6,-76,-21,23,4]), [-76, -21, 0, 4, 23, 6, 6]);

    // Check some edge cases that are easy to work out by hand.
    assert.ok(true, "This prints if this assert fails 2 (also good for debugging!)");
}

//// BEGIN - CHECK
check(order_by_points)