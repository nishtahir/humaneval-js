//// BEGIN - PROMPT
/**
 * Create a function encrypt that takes a string as an argument and
 * returns a string encrypted with the alphabet being rotated.
 * The alphabet should be rotated in a manner such that the letters
 * shift down by two multiplied to two places.
 * For example:
 * encrypt('hi') returns 'lm'
 * encrypt('asdfghjkl') returns 'ewhjklnop'
 * encrypt('gf') returns 'kj'
 * encrypt('et') returns 'ix'
 */

//// BEGIN - CANONICAL SOLUTION
function encrypt(s) {
    const d = 'abcdefghijklmnopqrstuvwxyz';
    let out = '';
    for (const c of s) {
        if (d.includes(c)) {
            out += d[(d.indexOf(c) + 2 * 2) % 26];
        } else {
            out += c;
        }
    }
    return out;
}

//// BEGIN - TEST
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate('hi'), 'lm', "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate('asdfghjkl'), 'ewhjklnop', "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate('gf'), 'kj', "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate('et'), 'ix', "This prints if this assert fails 1 (good for debugging!)");

    assert.strictEqual(candidate('faewfawefaewg'), 'jeiajeaijeiak', "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate('hellomyfriend'), 'lippsqcjvmirh', "This prints if this assert fails 2 (good for debugging!)");
    assert.strictEqual(
        candidate('dxzdlmnilfuhmilufhlihufnmlimnufhlimnufhfucufh'),
        'hbdhpqrmpjylqmpyjlpmlyjrqpmqryjlpmqryjljygyjl',
        "This prints if this assert fails 3 (good for debugging!)"
    );

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate('a'), 'e', "This prints if this assert fails 2 (also good for debugging!)");
}

//// BEGIN - CHECK
check(encrypt);