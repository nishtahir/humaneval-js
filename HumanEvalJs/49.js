//// BEGIN - PROMPT
/**
 * Return 2^n modulo p (be aware of numerics).
 * @param {number} n
 * @param {number} p
 * @returns {number}
 */
function modp(n, p) {
    //// BEGIN - CANONICAL SOLUTION
    let ret = 1;
    for (let i = 0; i < n; i++) {
        ret = (2 * ret) % p;
    }
    return ret;
}

//// BEGIN - TEST
const assert = require('assert');
const METADATA = {};

function check(candidate) {
    assert.strictEqual(candidate(3, 5), 3);
    assert.strictEqual(candidate(1101, 101), 2);
    assert.strictEqual(candidate(0, 101), 1);
    assert.strictEqual(candidate(3, 11), 8);
    assert.strictEqual(candidate(100, 101), 1);
    assert.strictEqual(candidate(30, 5), 4);
    assert.strictEqual(candidate(31, 5), 3);
}

//// BEGIN - CHECK
check(modp);