//// BEGIN - PROMPT

/**
 * primeFib returns the n-th number that is both a Fibonacci number and prime.
 * @param {number} n
 * @returns {number}
 * @example
 * primeFib(1) // 2
 * primeFib(2) // 3
 * primeFib(3) // 5
 * primeFib(4) // 13
 * primeFib(5) // 89
 */
function primeFib(n) {
    function isPrime(p) {
        if (p < 2) return false;
        const limit = Math.min(Math.floor(Math.sqrt(p)) + 1, p - 1);
        for (let k = 2; k < limit; k++) {
            if (p % k === 0) return false;
        }
        return true;
    }
    const f = [0, 1];
    while (true) {
        f.push(f[f.length - 1] + f[f.length - 2]);
        if (isPrime(f[f.length - 1])) {
            n--;
        }
        if (n === 0) {
            return f[f.length - 1];
        }
    }
}

//// BEGIN - CANONICAL SOLUTION

// (Implementation is above)

//// BEGIN - TEST

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate(1), 2);
    assert.strictEqual(candidate(2), 3);
    assert.strictEqual(candidate(3), 5);
    assert.strictEqual(candidate(4), 13);
    assert.strictEqual(candidate(5), 89);
    assert.strictEqual(candidate(6), 233);
    assert.strictEqual(candidate(7), 1597);
    assert.strictEqual(candidate(8), 28657);
    assert.strictEqual(candidate(9), 514229);
    assert.strictEqual(candidate(10), 433494437);
}

//// BEGIN - CHECK

check(primeFib);