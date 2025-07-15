//// BEGIN - PROMPT
/**
 * Add two numbers x and y
 *
 * @example
 * add(2, 3); // 5
 * add(5, 7); // 12
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function add(x, y) {
//// BEGIN - CANONICAL SOLUTION
    return x + y;
}

//// BEGIN - TEST
const METADATA = {};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate(0, 1), 1);
    assert.strictEqual(candidate(1, 0), 1);
    assert.strictEqual(candidate(2, 3), 5);
    assert.strictEqual(candidate(5, 7), 12);
    assert.strictEqual(candidate(7, 5), 12);

    for (let i = 0; i < 100; i++) {
        const x = Math.floor(Math.random() * 1001);
        const y = Math.floor(Math.random() * 1001);
        assert.strictEqual(candidate(x, y), x + y);
    }
}

//// BEGIN - CHECK
check(add);