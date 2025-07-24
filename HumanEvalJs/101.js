//// BEGIN - PROMPT
/**
 * You will be given a string of words separated by commas or spaces. Your task is
 * to split the string into words and return an array of the words.
 *
 * For example:
 * wordsString("Hi, my name is John") == ["Hi", "my", "name", "is", "John"]
 * wordsString("One, two, three, four, five, six") == ["One", "two", "three", "four", "five", "six"]
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
const METADATA = {};
const assert = require('assert');

function check(candidate) {
  // Check some simple cases
  assert.deepStrictEqual(candidate("Hi, my name is John"), ["Hi", "my", "name", "is", "John"]);
  assert.deepStrictEqual(candidate("One, two, three, four, five, six"), ["One", "two", "three", "four", "five", "six"]);
  assert.deepStrictEqual(candidate("Hi, my name"), ["Hi", "my", "name"]);
  assert.deepStrictEqual(candidate("One,, two, three, four, five, six,"), ["One", "two", "three", "four", "five", "six"]);

  // Check some edge cases that are easy to work out by hand.
  assert.deepStrictEqual(candidate(""), []);
  assert.deepStrictEqual(candidate("ahmed     , gamal"), ["ahmed", "gamal"]);
}

//// BEGIN - CHECK
check(wordsString);