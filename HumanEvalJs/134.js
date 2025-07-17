//// BEGIN - PROMPT
/**
 * Create a function that returns true if the last character
 * of a given string is an alphabetical character and is not
 * a part of a word, and false otherwise.
 * Note: "word" is a group of characters separated by space.
 *
 * Examples:
 *   checkIfLastCharIsALetter("apple pie"); // false
 *   checkIfLastCharIsALetter("apple pi e"); // true
 *   checkIfLastCharIsALetter("apple pi e "); // false
 *   checkIfLastCharIsALetter(""); // false
 */
function checkIfLastCharIsALetter(txt) {
//// BEGIN - CANONICAL SOLUTION
    const parts = txt.split(' ');
    const last = parts[parts.length - 1];
    return last.length === 1 && (last.toLowerCase().charCodeAt(0) >= 97 && last.toLowerCase().charCodeAt(0) <= 122);
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate("apple"), false);
    assert.strictEqual(candidate("apple pi e"), true);
    assert.strictEqual(candidate("eeeee"), false);
    assert.strictEqual(candidate("A"), true);
    assert.strictEqual(candidate("Pumpkin pie "), false);
    assert.strictEqual(candidate("Pumpkin pie 1"), false);
    assert.strictEqual(candidate(""), false);
    assert.strictEqual(candidate("eeeee e "), false);
    assert.strictEqual(candidate("apple pie"), false);
    assert.strictEqual(candidate("apple pi e "), false);
}

//// BEGIN - CHECK
check(checkIfLastCharIsALetter);