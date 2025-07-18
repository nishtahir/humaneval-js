//// BEGIN - PROMPT
/**
 * Write a function that takes an integer a and returns true 
 * if this integer is a cube of some integer number.
 * Note: you may assume the input is always valid.
 * iscube(1) // true
 * iscube(2) // false
 * iscube(-1) // true
 * iscube(64) // true
 * iscube(0) // true
 * iscube(180) // false
 */
function iscube(a) {
//// BEGIN - CANONICAL SOLUTION
    a = Math.abs(a);
    return Math.pow(Math.round(Math.pow(a, 1/3)), 3) === a;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate(1), true, 'First test error: ' + candidate(1));
    assert.strictEqual(candidate(2), false, 'Second test error: ' + candidate(2));
    assert.strictEqual(candidate(-1), true, 'Third test error: ' + candidate(-1));
    assert.strictEqual(candidate(64), true, 'Fourth test error: ' + candidate(64));
    assert.strictEqual(candidate(180), false, 'Fifth test error: ' + candidate(180));
    assert.strictEqual(candidate(1000), true, 'Sixth test error: ' + candidate(1000));

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate(0), true, '1st edge test error: ' + candidate(0));
    assert.strictEqual(candidate(1729), false, '2nd edge test error: ' + candidate(1729));
}

//// BEGIN - CHECK
check(iscube);