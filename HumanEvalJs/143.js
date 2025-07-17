//// BEGIN - PROMPT
/**
 * You are given a string representing a sentence,
 * the sentence contains some words separated by a space,
 * and you have to return a string that contains the words from the original sentence,
 * whose lengths are prime numbers,
 * the order of the words in the new string should be the same as the original one.
 *
 * Example 1:
 *     Input: sentence = "This is a test"
 *     Output: "is"
 *
 * Example 2:
 *     Input: sentence = "lets go for swimming"
 *     Output: "go for"
 *
 * Constraints:
 *     * 1 <= len(sentence) <= 100
 *     * sentence contains only letters
 */

function wordsInSentence(sentence) {
//// BEGIN - CANONICAL SOLUTION
    const words = sentence.split(' ');
    const result = [];

    /**
     * Check if a number is prime.
     * @param {number} n
     * @returns {boolean}
     */
    const isPrime = (n) => {
        if (n <= 1) return false;
        if (n === 2) return true;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    for (const word of words) {
        if (isPrime(word.length)) {
            result.push(word);
        }
    }

    return result.join(' ');
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate("This is a test"), "is");
    assert.strictEqual(candidate("lets go for swimming"), "go for");
    assert.strictEqual(candidate("there is no place available here"), "there is no place");
    assert.strictEqual(candidate("Hi I am Hussein"), "Hi am Hussein");
    assert.strictEqual(candidate("go for it"), "go for it");

    // Edge cases
    assert.strictEqual(candidate("here"), "");
    assert.strictEqual(candidate("here is"), "is");
}

//// BEGIN - CHECK
check(wordsInSentence);