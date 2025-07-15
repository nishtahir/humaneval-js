//// BEGIN - PROMPT

/**
 * xs represent coefficients of a polynomial.
 * xs[0] + xs[1] * x + xs[2] * x^2 + ....
 * Return derivative of this polynomial in the same form.
 * @param {number[]} xs
 * @returns {number[]}
 * @example
 * derivative([3, 1, 2, 4, 5]); // [1, 4, 12, 20]
 * derivative([1, 2, 3]); // [2, 6]
 */
function derivative(xs) {
//// BEGIN - CANONICAL SOLUTION
    return xs.map((x, i) => i * x).slice(1);
}

//// BEGIN - TEST

const assert = require('assert');
const METADATA = {};

function check(candidate) {
    assert.deepStrictEqual(candidate([3, 1, 2, 4, 5]), [1, 4, 12, 20]);
    assert.deepStrictEqual(candidate([1, 2, 3]), [2, 6]);
    assert.deepStrictEqual(candidate([3, 2, 1]), [2, 2]);
    assert.deepStrictEqual(candidate([3, 2, 1, 0, 4]), [2, 2, 0, 16]);
    assert.deepStrictEqual(candidate([1]), []);
}

//// BEGIN - CHECK

check(derivative);