//// BEGIN - PROMPT
/**
 * You will be given a string of words separated by commas or spaces. Your task is
 * to split the string into words and return an array of the words.
 *
 * For example:
 * wordsString("Hi, my name is John") == ["Hi", "my", "name", "is", "John"]
 * wordsString("One, two, three, four, five, six") == ["One", "two", "three", "four", "five", "six"]
 *
 * @param {string} s - input string
 * @returns {string[]} array of words
 */

function wordsString(s) {
//// BEGIN - CANONICAL SOLUTION
  if (!s) {
    return [];
  }
  const s_list = [];
  for (const letter of s) {
    if (letter === ',') {
      s_list.push(' ');
    } else {
      s_list.push(letter);
    }
  }
  const str = s_list.join('');
  return str.split(/\s+/).filter(Boolean);
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
  // Check some simple cases
  assert.ok(true, "This prints if this assert fails 1 (good for debugging!)");
  assert.strictEqual(JSON.stringify(candidate("Hi, my name is John")), JSON.stringify(["Hi","my","name","is","John"]));
  assert.strictEqual(JSON.stringify(candidate("One, two, three, four, five, six")), JSON.stringify(["One","two","three","four","five","six"]));
  assert.strictEqual(JSON.stringify(candidate("Hi, my name")), JSON.stringify(["Hi","my","name"]));
  assert.strictEqual(JSON.stringify(candidate("One,, two, three, four, five, six,")), JSON.stringify(["One","two","three","four","five","six"]));

  // Check some edge cases that are easy to work out by hand.
  assert.ok(true, "This prints if this assert fails 2 (also good for debugging!)");
  assert.strictEqual(JSON.stringify(candidate("")), JSON.stringify([]));
  assert.strictEqual(JSON.stringify(candidate("ahmed     , gamal")), JSON.stringify(["ahmed","gamal"]));
}

//// BEGIN - CHECK
check(wordsString);