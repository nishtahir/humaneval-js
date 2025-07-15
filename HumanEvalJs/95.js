//// BEGIN - PROMPT
/**
 * Given an object, return true if all keys are strings in lower 
 * case or all keys are strings in upper case, else return false.
 * The function should return false if the given object is empty.
 * Examples:
 * checkDictCase({"a":"apple", "b":"banana"}) should return true.
 * checkDictCase({"a":"apple", "A":"banana", "B":"banana"}) should return false.
 * checkDictCase({"a":"apple", 8:"banana", "a":"apple"}) should return false.
 * checkDictCase({"Name":"John", "Age":"36", "City":"Houston"}) should return false.
 * checkDictCase({"STATE":"NC", "ZIP":"12345" }) should return true.
 */
function checkDictCase(obj) {
//// BEGIN - CANONICAL SOLUTION
  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return false;
  } else {
    let state = 'start';
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (typeof key !== 'string') {
        state = 'mixed';
        break;
      }
      const isUpper = key.toUpperCase() === key && key.toLowerCase() !== key;
      const isLower = key.toLowerCase() === key && key.toUpperCase() !== key;
      if (state === 'start') {
        if (isUpper) {
          state = 'upper';
        } else if (isLower) {
          state = 'lower';
        } else {
          break;
        }
      } else if ((state === 'upper' && !isUpper) || (state === 'lower' && !isLower)) {
        state = 'mixed';
        break;
      } else {
        break;
      }
    }
    return state === 'upper' || state === 'lower';
  }
}

//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
  assert(candidate({"p":"pineapple", "b":"banana"}) === true, "First test error: " + candidate({"p":"pineapple", "b":"banana"}));
  assert(candidate({"p":"pineapple", "A":"banana", "B":"banana"}) === false, "Second test error: " + candidate({"p":"pineapple", "A":"banana", "B":"banana"}));
  assert(candidate({"p":"pineapple", 5:"banana", "a":"apple"}) === false, "Third test error: " + candidate({"p":"pineapple", 5:"banana", "a":"apple"}));
  assert(candidate({"Name":"John", "Age":"36", "City":"Houston"}) === false, "Fourth test error: " + candidate({"Name":"John", "Age":"36", "City":"Houston"}));
  assert(candidate({"STATE":"NC", "ZIP":"12345"}) === true, "Fifth test error: " + candidate({"STATE":"NC", "ZIP":"12345"}));
  assert(candidate({"fruit":"Orange", "taste":"Sweet"}) === true, "Fourth test error: " + candidate({"fruit":"Orange", "taste":"Sweet"}));
  assert(candidate({}) === false, "1st edge test error: " + candidate({}));
}

//// BEGIN - CHECK
check(checkDictCase);