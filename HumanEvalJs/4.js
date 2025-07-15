//// BEGIN - PROMPT
/**
 * For a given array of input numbers, calculate Mean Absolute Deviation
 * around the mean of this dataset.
 * Mean Absolute Deviation is the average absolute difference between each
 * element and a centerpoint (mean in this case):
 * MAD = average | x - x_mean |
 *
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Mean Absolute Deviation
 *
 * @example
 * meanAbsoluteDeviation([1.0, 2.0, 3.0, 4.0]); // 1.0
 */
function meanAbsoluteDeviation(numbers) {
    ////BEGIN - CANONICAL SOLUTION
    const mean = numbers.reduce((sum, x) => sum + x, 0) / numbers.length;
    const totalDev = numbers.reduce((sum, x) => sum + Math.abs(x - mean), 0);
    return totalDev / numbers.length;
}

//// BEGIN - TEST
const assert = require('assert');

const METADATA = {
    author: 'jt',
    dataset: 'test'
};

function check(candidate) {
    assert(Math.abs(candidate([1.0, 2.0, 3.0]) - 2.0/3.0) < 1e-6);
    assert(Math.abs(candidate([1.0, 2.0, 3.0, 4.0]) - 1.0) < 1e-6);
    assert(Math.abs(candidate([1.0, 2.0, 3.0, 4.0, 5.0]) - 6.0/5.0) < 1e-6);
}

//// BEGIN - CHECK
check(meanAbsoluteDeviation);