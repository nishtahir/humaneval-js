//// BEGIN - PROMPT
/**
 * Return the number of times the digit 7 appears in integers less than n which are divisible by 11 or 13.
 *
 * Examples:
 *   fizzBuzz(50) // 0
 *   fizzBuzz(78) // 2
 *   fizzBuzz(79) // 3
 *
 * @param {number} n
 * @returns {number}
 */
function fizzBuzz(n) {
//// BEGIN - CANONICAL SOLUTION
    const ns = [];
    for (let i = 0; i < n; i++) {
        if (i % 11 === 0 || i % 13 === 0) {
            ns.push(i);
        }
    }
    const s = ns.join('');
    let ans = 0;
    for (const c of s) {
        if (c === '7') {
            ans++;
        }
    }
    return ans;
}

//// BEGIN - TEST
const METADATA = {};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate(50), 0);
    assert.strictEqual(candidate(78), 2);
    assert.strictEqual(candidate(79), 3);
    assert.strictEqual(candidate(100), 3);
    assert.strictEqual(candidate(200), 6);
    assert.strictEqual(candidate(4000), 192);
    assert.strictEqual(candidate(10000), 639);
    assert.strictEqual(candidate(100000), 8026);
}

//// BEGIN - CHECK
check(fizzBuzz);