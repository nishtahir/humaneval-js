//// BEGIN - PROMPT
/**
 * Given a positive integer n, return the count of the numbers of n-digit
 * positive integers that start or end with 1.
 *
 * @param {number} n
 * @returns {number}
 */
function startsOneEnds(n) {
//// BEGIN - CANONICAL SOLUTION
    if (n === 1) return 1;
    return 18 * Math.pow(10, n - 2);
}

//// BEGIN - TEST
function assert(condition, message) {
    if (!condition) throw new Error(message || "Assertion failed");
}

function check(candidate) {
    // Check some simple cases
    assert(true, "This prints if this assert fails 1 (good for debugging!)");
    assert(candidate(1) === 1, "Expected startsOneEnds(1) to equal 1");
    assert(candidate(2) === 18, "Expected startsOneEnds(2) to equal 18");
    assert(candidate(3) === 180, "Expected startsOneEnds(3) to equal 180");
    assert(candidate(4) === 1800, "Expected startsOneEnds(4) to equal 1800");
    assert(candidate(5) === 18000, "Expected startsOneEnds(5) to equal 18000");

    // Check some edge cases that are easy to work out by hand.
    assert(true, "This prints if this assert fails 2 (also good for debugging!)");
}

//// BEGIN - CHECK
check(startsOneEnds);