const assert = require('assert');

//// BEGIN - PROMPT
/**
 * Given a positive integer, obtain its roman numeral equivalent as a string,
 * and return it in lowercase.
 * Restrictions: 1 <= num <= 1000
 *
 * Examples:
 * >>> int_to_mini_roman(19) == 'xix'
 * >>> int_to_mini_roman(152) == 'clii'
 * >>> int_to_mini_roman(426) == 'cdxxvi'
 */
function int_to_mini_roman(number) {
//// BEGIN - CANONICAL SOLUTION
    const num = [1, 4, 5, 9, 10, 40, 50, 90,
                 100, 400, 500, 900, 1000];
    const sym = ["I", "IV", "V", "IX", "X", "XL",
                 "L", "XC", "C", "CD", "D", "CM", "M"];
    let i = 12;
    let res = '';
    while (number > 0) {
        const div = Math.floor(number / num[i]);
        number %= num[i];
        for (let count = 0; count < div; count++) {
            res += sym[i];
        }
        i -= 1;
    }
    return res.toLowerCase();
}

//// BEGIN - TEST
function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate(19), 'xix');
    assert.strictEqual(candidate(152), 'clii');
    assert.strictEqual(candidate(251), 'ccli');
    assert.strictEqual(candidate(426), 'cdxxvi');
    assert.strictEqual(candidate(500), 'd');
    assert.strictEqual(candidate(1), 'i');
    assert.strictEqual(candidate(4), 'iv');
    assert.strictEqual(candidate(43), 'xliii');
    assert.strictEqual(candidate(90), 'xc');
    assert.strictEqual(candidate(94), 'xciv');
    assert.strictEqual(candidate(532), 'dxxxii');
    assert.strictEqual(candidate(900), 'cm');
    assert.strictEqual(candidate(994), 'cmxciv');
    assert.strictEqual(candidate(1000), 'm');

    // Check some edge cases that are easy to work out by hand.
    assert.ok(true);
}

//// BEGIN - CHECK
check(int_to_mini_roman);