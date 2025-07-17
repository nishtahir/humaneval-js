//// BEGIN - PROMPT
/**
 * brackets is a string of "<" and ">".
 * Returns true if every opening bracket has a corresponding closing bracket.
 *
 * @param {string} brackets
 * @returns {boolean}
 *
 * @example
 * correctBracketing("<") // false
 * correctBracketing("<>") // true
 * correctBracketing("<<><>>") // true
 * correctBracketing("><<>") // false
 */
function correctBracketing(brackets) {
//// BEGIN - CANONICAL SOLUTION
    let depth = 0;
    for (const b of brackets) {
        if (b === "<") {
            depth++;
        } else {
            depth--;
        }
        if (depth < 0) {
            return false;
        }
    }
    return depth === 0;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    assert.ok(candidate("<>"));
    assert.ok(candidate("<<><>>"));
    assert.ok(candidate("<><><<><>><>"));
    assert.ok(candidate("<><><<<><><>><>><<><><<>>>"));
    assert.ok(!candidate("<<<><>>>>"));
    assert.ok(!candidate("><<>"));
    assert.ok(!candidate("<"));
    assert.ok(!candidate("<<<<"));
    assert.ok(!candidate(">"));
    assert.ok(!candidate("<<>"));
    assert.ok(!candidate("<><><<><>><>><<>"));
    assert.ok(!candidate("<><><<><>><>>><>"));
}

//// BEGIN - CHECK

check(correctBracketing);