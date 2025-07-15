//// BEGIN - PROMPT
/**
 * You're a hungry rabbit, and you already have eaten a certain number of carrots,
 * but now you need to eat more carrots to complete the day's meals.
 * You should return an array of [ total number of eaten carrots after your meals,
 *                              the number of carrots left after your meals ].
 * If there are not enough remaining carrots, you will eat all remaining carrots, but will still be hungry.
 *
 * Example:
 * eat(5, 6, 10) -> [11, 4]
 * eat(4, 8, 9)  -> [12, 1]
 * eat(1, 10, 10)-> [11, 0]
 * eat(2, 11, 5) -> [7, 0]
 *
 * @param {number} number - the number of carrots that you have eaten.
 * @param {number} need - the number of carrots that you need to eat.
 * @param {number} remaining - the number of remaining carrots that exist in stock.
 * @returns {[number, number]} [ total eaten after meals, carrots left after meals ].
 */
function eat(number, need, remaining) {
    //// BEGIN - CANONICAL SOLUTION
    if (need <= remaining) {
        return [number + need, remaining - need];
    } else {
        return [number + remaining, 0];
    }
}

//// BEGIN - TEST
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.ok(true, 'This prints if this assert fails 1 (good for debugging!)');
    assert.deepStrictEqual(candidate(5, 6, 10), [11, 4], 'Error');
    assert.deepStrictEqual(candidate(4, 8, 9), [12, 1], 'Error');
    assert.deepStrictEqual(candidate(1, 10, 10), [11, 0], 'Error');
    assert.deepStrictEqual(candidate(2, 11, 5), [7, 0], 'Error');

    // Check some edge cases that are easy to work out by hand.
    assert.ok(true, 'This prints if this assert fails 2 (also good for debugging!)');
    assert.deepStrictEqual(candidate(4, 5, 7), [9, 2], 'Error');
    assert.deepStrictEqual(candidate(4, 5, 1), [5, 0], 'Error');
}

//// BEGIN - CHECK
check(eat);