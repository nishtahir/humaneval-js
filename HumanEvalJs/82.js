//// BEGIN - PROMPT
/**
 * Write a function that takes a string and returns true if the string
 * length is a prime number or false otherwise
 * Examples:
 * primeLength('Hello') === true
 * primeLength('abcdcba') === true
 * primeLength('kittens') === true
 * primeLength('orange') === false
 */
function primeLength(string) {
//// BEGIN - CANONICAL SOLUTION
    const l = string.length;
    if (l === 0 || l === 1) {
        return false;
    }
    for (let i = 2; i < l; i++) {
        if (l % i === 0) {
            return false;
        }
    }
    return true;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate('Hello'), true);
    assert.strictEqual(candidate('abcdcba'), true);
    assert.strictEqual(candidate('kittens'), true);
    assert.strictEqual(candidate('orange'), false);
    assert.strictEqual(candidate('wow'), true);
    assert.strictEqual(candidate('world'), true);
    assert.strictEqual(candidate('MadaM'), true);
    assert.strictEqual(candidate('Wow'), true);
    assert.strictEqual(candidate(''), false);
    assert.strictEqual(candidate('HI'), true);
    assert.strictEqual(candidate('go'), true);
    assert.strictEqual(candidate('gogo'), false);
    assert.strictEqual(candidate('aaaaaaaaaaaaaaa'), false);
    // Edge cases
    assert.strictEqual(candidate('Madam'), true);
    assert.strictEqual(candidate('M'), false);
    assert.strictEqual(candidate('0'), false);
}

//// BEGIN - CHECK
check(primeLength);