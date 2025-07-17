//// BEGIN - PROMPT
/**
 * Create a function that takes integers, floats, or strings representing
 * real numbers, and returns the larger variable in its given variable type.
 * Return null if the values are equal.
 * Note: If a real number is represented as a string, the floating point might be . or ,
 *
 * compare_one(1, 2.5) ➞ 2.5
 * compare_one(1, "2,3") ➞ "2,3"
 * compare_one("5,1", "6") ➞ "6"
 * compare_one("1", 1) ➞ null
 */
function compare_one(a, b) {
//// BEGIN - CANONICAL SOLUTION
    let tempA = a;
    let tempB = b;
    if (typeof tempA === "string") {
        tempA = tempA.replace(",", ".");
    }
    if (typeof tempB === "string") {
        tempB = tempB.replace(",", ".");
    }
    const numA = parseFloat(tempA);
    const numB = parseFloat(tempB);
    if (numA === numB) {
        return null;
    }
    return numA > numB ? a : b;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    const assert = require("assert");
    assert.strictEqual(candidate(1, 2), 2);
    assert.strictEqual(candidate(1, 2.5), 2.5);
    assert.strictEqual(candidate(2, 3), 3);
    assert.strictEqual(candidate(5, 6), 6);
    assert.strictEqual(candidate(1, "2,3"), "2,3");
    assert.strictEqual(candidate("5,1", "6"), "6");
    assert.strictEqual(candidate("1", "2"), "2");
    assert.strictEqual(candidate("1", 1), null);
    // Check some edge cases that are easy to work out by hand.
    assert.ok(true);
}

//// BEGIN - CHECK
check(compare_one);