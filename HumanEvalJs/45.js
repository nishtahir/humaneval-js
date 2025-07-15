//// BEGIN - PROMPT
/**
 * Given length of a side and high return area for a triangle.
 * @param {number} a - length of a side
 * @param {number} h - high of the triangle
 * @returns {number} area of the triangle
 * @example
 * triangle_area(5, 3); // 7.5
 */
function triangle_area(a, h) {
//// BEGIN - CANONICAL SOLUTION
    return a * h / 2.0;
}

//// BEGIN - TEST
const METADATA = {};

function check(candidate) {
    const assert = require('assert');
    assert.strictEqual(candidate(5, 3), 7.5);
    assert.strictEqual(candidate(2, 2), 2.0);
    assert.strictEqual(candidate(10, 8), 40.0);
}

//// BEGIN - CHECK
check(triangle_area);