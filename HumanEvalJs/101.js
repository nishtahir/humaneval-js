//// BEGIN - PROMPT

/**
 * You will be given a string of words separated by commas or spaces. Your task is
 * to split the string into words and return an array of the words.
 *
 * For example:
 * words_string("Hi, my name is John") == ["Hi", "my", "name", "is", "John"]
 * words_string("One, two, three, four, five, six") == ["One", "two", "three", "four", "five", "six"]
 *
 * @param {string} s - input string
 * @returns {string[]} array of words
 */

//// BEGIN - CANONICAL SOLUTION
function words_string(s) {
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
function check(candidate) {
  // Check some simple cases
  console.assert(true, "This prints if this assert fails 1 (good for debugging!)");
  console.assert(JSON.stringify(candidate("Hi, my name is John")) === JSON.stringify(["Hi","my","name","is","John"]));
  console.assert(JSON.stringify(candidate("One, two, three, four, five, six")) === JSON.stringify(["One","two","three","four","five","six"]));
  console.assert(JSON.stringify(candidate("Hi, my name")) === JSON.stringify(["Hi","my","name"]));
  console.assert(JSON.stringify(candidate("One,, two, three, four, five, six,")) === JSON.stringify(["One","two","three","four","five","six"]));

  // Check some edge cases that are easy to work out by hand.
  console.assert(true, "This prints if this assert fails 2 (also good for debugging!)");
  console.assert(JSON.stringify(candidate("")) === JSON.stringify([]));
  console.assert(JSON.stringify(candidate("ahmed     , gamal")) === JSON.stringify(["ahmed","gamal"]));
}

//// BEGIN - CHECK
check(words_string);