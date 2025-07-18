//// BEGIN - PROMPT
/**
 * Given a string of words, return an array of words split on whitespace.
 * If no whitespace exists, split on commas ','.
 * If no commas exist, return the number of lowercase letters whose ASCII code is even.
 * ASCII codes: 'a' = 97, 'b' = 98, ..., 'z' = 122
 *
 * Examples:
 * splitWords("Hello world!") ➞ ["Hello", "world!"]
 * splitWords("Hello,world!") ➞ ["Hello", "world!"]
 * splitWords("abcdef") ➞ 3
 *
 * @param {string} txt
 * @returns {string[]|number}
 */

function splitWords(txt) {
//// BEGIN - CANONICAL SOLUTION
    if (txt.includes(' ')) {
        return txt.split(/\s+/);
    } else if (txt.includes(',')) {
        return txt.replace(/,/g, ' ').split(/\s+/);
    } else {
        let count = 0;
        for (let char of txt) {
            const code = char.charCodeAt(0);
            if (char >= 'a' && char <= 'z' && code % 2 === 0) {
                count++;
            }
        }
        return count;
    }
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');
function check(candidate) {
    assert.deepStrictEqual(candidate("Hello world!"), ["Hello", "world!"]);
    assert.deepStrictEqual(candidate("Hello,world!"), ["Hello", "world!"]);
    assert.deepStrictEqual(candidate("Hello world,!"), ["Hello", "world,!"]);
    assert.deepStrictEqual(candidate("Hello,Hello,world !"), ["Hello,Hello,world", "!"]);
    assert.strictEqual(candidate("abcdef"), 3);
    assert.strictEqual(candidate("aaabb"), 2);
    assert.strictEqual(candidate("aaaBb"), 1);
    assert.strictEqual(candidate(""), 0);
}

//// BEGIN - CHECK
check(splitWords);