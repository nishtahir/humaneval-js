//// BEGIN - PROMPT

/**
 * Imagine a road that's a perfectly straight infinitely long line.
 * n cars are driving left to right; simultaneously, a different set of n cars
 * are driving right to left. The two sets of cars start out being very far from
 * each other. All cars move at the same speed. Two cars are said to collide
 * when a car that's moving left to right hits a car that's moving right to left.
 * However, the cars are infinitely sturdy and strong; as a result, they continue moving
 * in their trajectory as if they did not collide.
 *
 * @param {number} n - number of cars in each set
 * @returns {number} number of collisions
 */
function carRaceCollision(n) {
//// BEGIN - CANONICAL SOLUTION
    return n * n;
}

//// BEGIN - TEST

const assert = require('assert');
const METADATA = {};

function check(candidate) {
    assert.strictEqual(candidate(2), 4);
    assert.strictEqual(candidate(3), 9);
    assert.strictEqual(candidate(4), 16);
    assert.strictEqual(candidate(8), 64);
    assert.strictEqual(candidate(10), 100);
}

//// BEGIN - CHECK
check(carRaceCollision);