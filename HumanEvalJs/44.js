//// BEGIN - PROMPT
/**
 * Change numerical base of input number x to base.
 * return string representation after the conversion.
 * base numbers are less than 10.
 * @param {number} x - the number to convert.
 * @param {number} base - the base to convert to (less than 10).
 * @returns {string} the string representation of x in the given base.
 * @example
 * changeBase(8, 3); // '22'
 * changeBase(8, 2); // '1000'
 * changeBase(7, 2); // '111'
 */
function changeBase(x, base) {
//// BEGIN - CANONICAL SOLUTION
    let ret = "";
    while (x > 0) {
        ret = String(x % base) + ret;
        x = Math.floor(x / base);
    }
    return ret;
}

//// BEGIN - TEST
const assert = require('assert');
const METADATA = {};

function check(candidate) {
    assert.strictEqual(candidate(8, 3), "22");
    assert.strictEqual(candidate(9, 3), "100");
    assert.strictEqual(candidate(234, 2), "11101010");
    assert.strictEqual(candidate(16, 2), "10000");
    assert.strictEqual(candidate(8, 2), "1000");
    assert.strictEqual(candidate(7, 2), "111");
    for (let x = 2; x < 8; x++) {
        assert.strictEqual(candidate(x, x + 1), String(x));
    }
}

//// BEGIN - CHECK
check(changeBase);