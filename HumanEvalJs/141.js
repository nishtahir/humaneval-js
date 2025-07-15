//// BEGIN - PROMPT
/**
 * Create a function which takes a string representing a file's name, and returns
 * 'Yes' if the file's name is valid, and returns 'No' otherwise.
 * A file's name is considered to be valid if and only if all the following conditions
 * are met:
 * - There should not be more than three digits ('0'-'9') in the file's name.
 * - The file's name contains exactly one dot '.'
 * - The substring before the dot should not be empty, and it starts with a letter from
 *   the Latin alphabet ('a'-'z' and 'A'-'Z').
 * - The substring after the dot should be one of these: ['txt', 'exe', 'dll']
 *
 * @param {string} file_name
 * @returns {'Yes'|'No'}
 */
//// BEGIN - CANONICAL SOLUTION
function file_name_check(file_name) {
    const suf = ['txt', 'exe', 'dll'];
    const parts = file_name.split('.');
    if (parts.length !== 2) {
        return 'No';
    }
    const [name, ext] = parts;
    if (!suf.includes(ext)) {
        return 'No';
    }
    if (name.length === 0) {
        return 'No';
    }
    if (!/^[A-Za-z]/.test(name)) {
        return 'No';
    }
    const digitCount = (name.match(/\d/g) || []).length;
    if (digitCount > 3) {
        return 'No';
    }
    return 'Yes';
}
//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    assert.strictEqual(candidate("example.txt"), 'Yes');
    assert.strictEqual(candidate("1example.dll"), 'No');
    assert.strictEqual(candidate('s1sdf3.asd'), 'No');
    assert.strictEqual(candidate('K.dll'), 'Yes');
    assert.strictEqual(candidate('MY16FILE3.exe'), 'Yes');
    assert.strictEqual(candidate('His12FILE94.exe'), 'No');
    assert.strictEqual(candidate('_Y.txt'), 'No');
    assert.strictEqual(candidate('?aREYA.exe'), 'No');
    assert.strictEqual(candidate('/this_is_valid.dll'), 'No');
    assert.strictEqual(candidate('this_is_valid.wow'), 'No');
    assert.strictEqual(candidate('this_is_valid.txt'), 'Yes');
    assert.strictEqual(candidate('this_is_valid.txtexe'), 'No');
    assert.strictEqual(candidate('#this2_i4s_5valid.ten'), 'No');
    assert.strictEqual(candidate('@this1_is6_valid.exe'), 'No');
    assert.strictEqual(candidate('this_is_12valid.6exe4.txt'), 'No');
    assert.strictEqual(candidate('all.exe.txt'), 'No');
    assert.strictEqual(candidate('I563_No.exe'), 'Yes');
    assert.strictEqual(candidate('Is3youfault.txt'), 'Yes');
    assert.strictEqual(candidate('no_one#knows.dll'), 'Yes');
    assert.strictEqual(candidate('1I563_Yes3.exe'), 'No');
    assert.strictEqual(candidate('I563_Yes3.txtt'), 'No');
    assert.strictEqual(candidate('final..txt'), 'No');
    assert.strictEqual(candidate('final132'), 'No');
    assert.strictEqual(candidate('_f4indsartal132.'), 'No');
    assert.strictEqual(candidate('.txt'), 'No');
    assert.strictEqual(candidate('s.'), 'No');
}
//// BEGIN - CHECK
check(file_name_check);