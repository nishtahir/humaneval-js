//// BEGIN - PROMPT
/**
 * Task
 * Write a function that takes a string as input and returns the sum of the upper characters only'
 * ASCII codes.
 *
 * Examples:
 *     digitSum("") => 0
 *     digitSum("abAB") => 131
 *     digitSum("abcCd") => 67
 *     digitSum("helloE") => 69
 *     digitSum("woArBld") => 131
 *     digitSum("aAaaaXa") => 153
 */
function digitSum(s) {
//// BEGIN - CANONICAL SOLUTION
    if (s === "") return 0;
    let sum = 0;
    for (const char of s) {
        if (char >= 'A' && char <= 'Z') {
            sum += char.charCodeAt(0);
        }
    }
    return sum;
}

//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate(""), 0, "Error");
    assert.strictEqual(candidate("abAB"), 131, "Error");
    assert.strictEqual(candidate("abcCd"), 67, "Error");
    assert.strictEqual(candidate("helloE"), 69, "Error");
    assert.strictEqual(candidate("woArBld"), 131, "Error");
    assert.strictEqual(candidate("aAaaaXa"), 153, "Error");

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate(" How are yOu?"), 151, "Error");
    assert.strictEqual(candidate("You arE Very Smart"), 327, "Error");
}

//// BEGIN - CHECK
check(digitSum);