//// BEGIN - PROMPT
/**
 * Return a string containing space-delimited numbers starting from 0 up to n inclusive.
 *
 * @param {number} n
 * @returns {string}
 *
 * @example
 * string_sequence(0); // '0'
 * string_sequence(5); // '0 1 2 3 4 5'
 */
function string_sequence(n) {
//// BEGIN - CANONICAL SOLUTION
    return Array.from({ length: n + 1 }, (_, x) => x).join(' ');
}

//// BEGIN - TEST

const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate(0), '0');
    assert.strictEqual(candidate(3), '0 1 2 3');
    assert.strictEqual(candidate(10), '0 1 2 3 4 5 6 7 8 9 10');
}

//// BEGIN - CHECK

check(string_sequence);