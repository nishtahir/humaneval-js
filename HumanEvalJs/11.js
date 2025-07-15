//// BEGIN - PROMPT
/**
 * Input are two strings a and b consisting only of '1's and '0's.
 * Perform binary XOR on these inputs and return result also as a string.
 *
 * @example
 * stringXor('010', '110'); // '100'
 *
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
function stringXor(a, b) {
//// BEGIN - CANONICAL SOLUTION
    function xor(i, j) {
        return i === j ? '0' : '1';
    }
    let result = '';
    const length = Math.min(a.length, b.length);
    for (let idx = 0; idx < length; idx++) {
        result += xor(a[idx], b[idx]);
    }
    return result;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

function check(candidate) {
    if (candidate('111000', '101010') !== '010010') {
        throw new Error("Test failed for input ('111000','101010')");
    }
    if (candidate('1', '1') !== '0') {
        throw new Error("Test failed for input ('1','1')");
    }
    if (candidate('0101', '0000') !== '0101') {
        throw new Error("Test failed for input ('0101','0000')");
    }
}

//// BEGIN - CHECK
check(stringXor);