//// BEGIN - PROMPT
/**
 * For a given list of integers, return a tuple consisting of a sum and a product of all the integers in a list.
 * Empty sum should be equal to 0 and empty product should be equal to 1.
 * @param {number[]} numbers
 * @returns {[number, number]}
 * @example
 * // returns [0, 1]
 * sumProduct([]);
 * @example
 * // returns [10, 24]
 * sumProduct([1, 2, 3, 4]);
 */
function sumProduct(numbers) {
//// BEGIN - CANONICAL SOLUTION
    let sumValue = 0;
    let prodValue = 1;
    for (const n of numbers) {
        sumValue += n;
        prodValue *= n;
    }
    return [sumValue, prodValue];
}

//// BEGIN - TEST

const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.deepStrictEqual(candidate([]), [0, 1]);
    assert.deepStrictEqual(candidate([1, 1, 1]), [3, 1]);
    assert.deepStrictEqual(candidate([100, 0]), [100, 0]);
    assert.deepStrictEqual(candidate([3, 5, 7]), [3 + 5 + 7, 3 * 5 * 7]);
    assert.deepStrictEqual(candidate([10]), [10, 10]);
}

//// BEGIN - CHECK

check(sumProduct);