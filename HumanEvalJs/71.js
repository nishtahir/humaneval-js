//// BEGIN - PROMPT
/**
 * Given the lengths of the three sides of a triangle. Return the area of
 * the triangle rounded to 2 decimal points if the three sides form a valid triangle.
 * Otherwise return -1.
 * Three sides make a valid triangle when the sum of any two sides is greater
 * than the third side.
 * Example:
 * triangleArea(3, 4, 5) === 6.00
 * triangleArea(1, 2, 10) === -1
 */
function triangleArea(a, b, c) {
//// BEGIN - CANONICAL SOLUTION
    if (a + b <= c || a + c <= b || b + c <= a) {
        return -1;
    }
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return Math.round(area * 100) / 100;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate(3, 4, 5), 6.00, "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate(1, 2, 10), -1);
    assert.strictEqual(candidate(4, 8, 5), 8.18);
    assert.strictEqual(candidate(2, 2, 2), 1.73);
    assert.strictEqual(candidate(1, 2, 3), -1);
    assert.strictEqual(candidate(10, 5, 7), 16.25);
    assert.strictEqual(candidate(2, 6, 3), -1);

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate(1, 1, 1), 0.43, "This prints if this assert fails 2 (also good for debugging!)");
    assert.strictEqual(candidate(2, 2, 10), -1);
}

//// BEGIN - CHECK
check(triangleArea);