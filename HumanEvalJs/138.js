//// BEGIN - PROMPT
/**
 * Evaluate whether the given number n can be written as the sum of exactly 4 positive even numbers
 * Example
 * is_equal_to_sum_even(4) == false
 * is_equal_to_sum_even(6) == false
 * is_equal_to_sum_even(8) == true
 */
function is_equal_to_sum_even(n) {
//// BEGIN - CANONICAL SOLUTION
    return n % 2 === 0 && n >= 8;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate(4), false);
    assert.strictEqual(candidate(6), false);
    assert.strictEqual(candidate(8), true);
    assert.strictEqual(candidate(10), true);
    assert.strictEqual(candidate(11), false);
    assert.strictEqual(candidate(12), true);
    assert.strictEqual(candidate(13), false);
    assert.strictEqual(candidate(16), true);
}

//// BEGIN - CHECK
check(is_equal_to_sum_even);