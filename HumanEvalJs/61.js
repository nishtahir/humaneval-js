//// BEGIN - PROMPT
/**
 * brackets is a string of "(" and ")".
 * return true if every opening bracket has a corresponding closing bracket.
 *
 * @param {string} brackets
 * @returns {boolean}
 *
 * @example
 * correctBracketing("("); // false
 * correctBracketing("()"); // true
 * correctBracketing("(()())"); // true
 * correctBracketing(")(()"); // false
 */
function correctBracketing(brackets) {
//// BEGIN - CANONICAL SOLUTION
    let depth = 0;
    for (const b of brackets) {
        if (b === '(') {
            depth += 1;
        } else {
            depth -= 1;
        }
        if (depth < 0) {
            return false;
        }
    }
    return depth === 0;
}

//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    assert(candidate("()"));
    assert(candidate("(()())"));
    assert(candidate("()()(()())()"));
    assert(candidate("()()((()()())())(()()(()))"));
    assert(!candidate("((()())))"));
    assert(!candidate(")(()"));
    assert(!candidate("("));
    assert(!candidate("(((("));
    assert(!candidate(")"));
    assert(!candidate("(()"));
    assert(!candidate("()()(()())())(()"));
    assert(!candidate("()()(()())()))()"));
}

//// BEGIN - CHECK
check(correctBracketing);