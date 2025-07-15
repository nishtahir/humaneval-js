//// BEGIN - PROMPT
/**
 * Given an integer, return an array that has the number of even and odd digits respectively.
 *
 * Example:
 *   evenOddCount(-12) ==> [1, 1]
 *   evenOddCount(123) ==> [1, 2]
 */
function evenOddCount(num) {
//// BEGIN - CANONICAL SOLUTION
    let evenCount = 0;
    let oddCount = 0;
    for (const digit of Math.abs(num).toString()) {
        if (parseInt(digit, 10) % 2 === 0) {
            evenCount += 1;
        } else {
            oddCount += 1;
        }
    }
    return [evenCount, oddCount];
}

//// BEGIN - TEST
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate(7), [0, 1]);
    assert.deepStrictEqual(candidate(-78), [1, 1]);
    assert.deepStrictEqual(candidate(3452), [2, 2]);
    assert.deepStrictEqual(candidate(346211), [3, 3]);
    assert.deepStrictEqual(candidate(-345821), [3, 3]);
    assert.deepStrictEqual(candidate(-2), [1, 0]);
    assert.deepStrictEqual(candidate(-45347), [2, 3]);
    assert.deepStrictEqual(candidate(0), [1, 0]);

    // Check some edge cases that are easy to work out by hand.
    assert.ok(true);
}

//// BEGIN - CHECK
check(evenOddCount)