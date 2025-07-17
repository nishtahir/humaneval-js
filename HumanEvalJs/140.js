//// BEGIN - PROMPT
/**
 * Given a string text, replace all spaces in it with underscores,
 * and if a string has more than 2 consecutive spaces,
 * then replace all consecutive spaces with -
 *
 * fixSpaces("Example") == "Example"
 * fixSpaces("Example 1") == "Example_1"
 * fixSpaces(" Example 2") == "_Example_2"
 * fixSpaces(" Example   3") == "_Example-3"
 *
 * @param {string} text
 * @returns {string}
 */
function fixSpaces(text) {
//// BEGIN - CANONICAL SOLUTION
    let newText = "";
    let i = 0;
    let start = 0, end = 0;
    while (i < text.length) {
        if (text[i] === " ") {
            end += 1;
        } else {
            if (end - start > 2) {
                newText += "-" + text[i];
            } else if (end - start > 0) {
                newText += "_".repeat(end - start) + text[i];
            } else {
                newText += text[i];
            }
            start = i + 1;
            end = i + 1;
        }
        i++;
    }
    if (end - start > 2) {
        newText += "-";
    } else if (end - start > 0) {
        newText += "_";
    }
    return newText;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    const assert = require('assert');
    assert.strictEqual(candidate("Example"), "Example", "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate("Mudasir Hanif "), "Mudasir_Hanif_", "This prints if this assert fails 2 (good for debugging!)");
    assert.strictEqual(candidate("Yellow Yellow  Dirty  Fellow"), "Yellow_Yellow__Dirty__Fellow", "This prints if this assert fails 3 (good for debugging!)");
    assert.strictEqual(candidate("Exa   mple"), "Exa-mple", "This prints if this assert fails 4 (good for debugging!)");
    assert.strictEqual(candidate("   Exa 1 2 2 mple"), "-Exa_1_2_2_mple", "This prints if this assert fails 4 (good for debugging!)");
}

//// BEGIN - CHECK
check(fixSpaces);