//// BEGIN - PROMPT
/**
 * You'll be given a string of words, and your task is to count the number
 * of boredoms. A boredom is a sentence that starts with the word "I".
 * Sentences are delimited by '.', '?' or '!'.
 *
 * @example
 * // 0
 * isBored("Hello world");
 * @example
 * // 1
 * isBored("The sky is blue. The sun is shining. I love this weather");
 */
function isBored(S) {
//// BEGIN - CANONICAL SOLUTION
    const sentences = S.split(/[.?!]\s*/);
    return sentences.reduce((count, sentence) => count + (sentence.slice(0, 2) === 'I ' ? 1 : 0), 0);
}

//// BEGIN - TEST
const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate("Hello world"), 0, "Test 1");
    assert.strictEqual(candidate("Is the sky blue?"), 0, "Test 2");
    assert.strictEqual(candidate("I love It !"), 1, "Test 3");
    assert.strictEqual(candidate("bIt"), 0, "Test 4");
    assert.strictEqual(candidate("I feel good today. I will be productive. will kill It"), 2, "Test 5");
    assert.strictEqual(candidate("You and I are going for a walk"), 0, "Test 6");
    assert.ok(true, "This prints if this assert fails 2 (also good for debugging!)");
}

//// BEGIN - CHECK
check(isBored);