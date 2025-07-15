//// BEGIN - PROMPT
/**
 * Given the lengths of the three sides of a triangle. Return true if the three
 * sides form a right-angled triangle, false otherwise.
 * A right-angled triangle is a triangle in which one angle is right angle or 
 * 90 degree.
 * Example:
 * right_angle_triangle(3, 4, 5) === true
 * right_angle_triangle(1, 2, 3) === false
 */
function right_angle_triangle(a, b, c) {
//// BEGIN - CANONICAL SOLUTION
    return a * a === b * b + c * c ||
           b * b === a * a + c * c ||
           c * c === a * a + b * b;
}

//// BEGIN - TEST
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate(3, 4, 5), true, "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate(1, 2, 3), false);
    assert.strictEqual(candidate(10, 6, 8), true);
    assert.strictEqual(candidate(2, 2, 2), false);
    assert.strictEqual(candidate(7, 24, 25), true);
    assert.strictEqual(candidate(10, 5, 7), false);
    assert.strictEqual(candidate(5, 12, 13), true);
    assert.strictEqual(candidate(15, 8, 17), true);
    assert.strictEqual(candidate(48, 55, 73), true);

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate(1, 1, 1), false, "This prints if this assert fails 2 (also good for debugging!)");
    assert.strictEqual(candidate(2, 2, 10), false);
}

//// BEGIN - CHECK
check(right_angle_triangle);