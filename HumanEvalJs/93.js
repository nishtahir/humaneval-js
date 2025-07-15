//// BEGIN - PROMPT
/**
 * Write a function that takes a message, and encodes in such a
 * way that it swaps case of all letters, replaces all vowels in
 * the message with the letter that appears 2 places ahead of that
 * vowel in the english alphabet.
 * Assume only letters.
 *
 * @param {string} message
 * @returns {string}
 * @example
 * // returns 'TGST'
 * encode('test');
 * @example
 * // returns 'tHKS KS C MGSSCGG'
 * encode('This is a message');
 */
function encode(message) {
//// BEGIN - CANONICAL SOLUTION
    const vowels = 'aeiouAEIOU';
    const vowelsReplace = {};
    for (const v of vowels) {
        vowelsReplace[v] = String.fromCharCode(v.charCodeAt(0) + 2);
    }
    let result = '';
    for (const ch of message) {
        // swap case
        const swapped = ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase();
        // replace vowel if needed
        result += vowelsReplace[swapped] || swapped;
    }
    return result;
}

//// BEGIN - TEST
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate('TEST'), 'tgst', "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate('Mudasir'), 'mWDCSKR', "This prints if this assert fails 2 (good for debugging!)");
    assert.strictEqual(candidate('YES'), 'ygs', "This prints if this assert fails 3 (good for debugging!)");

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate('This is a message'), 'tHKS KS C MGSSCGG', "This prints if this assert fails 2 (also good for debugging!)");
    assert.strictEqual(candidate("I DoNt KnOw WhAt tO WrItE"), 'k dQnT kNqW wHcT Tq wRkTg', "This prints if this assert fails 2 (also good for debugging!)");
}

//// BEGIN - CHECK
check(encode);