//// BEGIN - PROMPT
/**
 * Given a positive integer n, return the count of the numbers of n-digit
 * positive integers that start or end with 1.
 */
function startsOneEnds(n) {
//// BEGIN - CANONICAL SOLUTION
    if (n === 1) return 1;
    return 18 * Math.pow(10, n - 2);
}

//// BEGIN - TEST
const METADATA = {};
const assert = require("assert")

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate(1), 1, "Expected startsOneEnds(1) to equal 1");
    assert.strictEqual(candidate(2), 18, "Expected startsOneEnds(2) to equal 18");
    assert.strictEqual(candidate(3), 180, "Expected startsOneEnds(3) to equal 180");
    assert.strictEqual(candidate(4), 1800, "Expected startsOneEnds(4) to equal 1800");
    assert.strictEqual(candidate(5), 18000, "Expected startsOneEnds(5) to equal 18000");
    // Check some edge cases that are easy to work out by hand.
}

//// BEGIN - CHECK
check(startsOneEnds);