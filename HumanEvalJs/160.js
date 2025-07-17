//// BEGIN - PROMPT
/**
 * Given two lists operator, and operand. The first list has basic algebra operations,
 * and the second list is a list of integers. Use the two given lists to build the algebra
 * expression and return the evaluation of this expression.
 *
 * The basic algebra operations:
 *   Addition ( + )
 *   Subtraction ( - )
 *   Multiplication ( * )
 *   Floor division ( // )
 *   Exponentiation ( ** )
 *
 * Example:
 *   operator = ['+', '*', '-']
 *   operand  = [2, 3, 4, 5]
 *   result = 2 + 3 * 4 - 5 => 9
 *
 * Note:
 *   The length of operator list is equal to the length of operand list minus one.
 *   Operands are non-negative integers.
 *   Operator list has at least one operator, and operand list has at least two operands.
 *
 * @param {string[]} operator - array of operators
 * @param {number[]} operand - array of non-negative integers
 * @returns {number} evaluation of built expression
 */
//// BEGIN - CANONICAL SOLUTION
function do_algebra(operator, operand) {
    const ops = operator.slice();
    const vals = operand.slice();

    // handle exponentiation (right-associative)
    while (true) {
        const i = ops.lastIndexOf('**');
        if (i === -1) break;
        const res = vals[i] ** vals[i + 1];
        vals.splice(i, 2, res);
        ops.splice(i, 1);
    }

    // handle multiplication and floor division (left-associative)
    let idx;
    while ((idx = ops.findIndex(op => op === '*' || op === '//')) !== -1) {
        const op = ops[idx];
        const a = vals[idx], b = vals[idx + 1];
        const res = op === '*' ? a * b : Math.floor(a / b);
        vals.splice(idx, 2, res);
        ops.splice(idx, 1);
    }

    // handle addition and subtraction (left-associative)
    while ((idx = ops.findIndex(op => op === '+' || op === '-')) !== -1) {
        const op = ops[idx];
        const a = vals[idx], b = vals[idx + 1];
        const res = op === '+' ? a + b : a - b;
        vals.splice(idx, 2, res);
        ops.splice(idx, 1);
    }

    return vals[0];
}
//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');
function check(candidate) {
    assert.strictEqual(candidate(['**', '*', '+'], [2, 3, 4, 5]), 37);
    assert.strictEqual(candidate(['+', '*', '-'], [2, 3, 4, 5]), 9);
    assert.strictEqual(candidate(['//', '*'], [7, 3, 4]), 8, "This prints if this assert fails 1 (good for debugging!)");
    assert.ok(true, "This prints if this assert fails 2 (also good for debugging!)");
}
//// BEGIN - CHECK
check(do_algebra);