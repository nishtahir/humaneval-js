//// BEGIN - PROMPT
/**
 * Create a function that takes a value (string) representing a number
 * and returns the closest integer to it. If the number is equidistant
 * from two integers, round it away from zero.
 *
 * Examples:
 * closestInteger("10") -> 10
 * closestInteger("15.3") -> 15
 *
 * Rounding away from zero means that if the given number is equidistant
 * from two integers, the one you should return is the one that is the
 * farthest from zero. For example closestInteger("14.5") should
 * return 15 and closestInteger("-14.5") should return -15.
 *
 * @param {string} value - The string representation of the number.
 * @return {number} The closest integer.
 */
function closestInteger(value) {
    // remove trailing zeros if there's exactly one decimal point
    if ((value.match(/\./g) || []).length === 1) {
        while (value.charAt(value.length - 1) === '0') {
            value = value.slice(0, -1);
        }
    }
    const num = parseFloat(value);
    let res;
    if (value.slice(-2) === '.5') {
        if (num > 0) {
            res = Math.ceil(num);
        } else {
            res = Math.floor(num);
        }
    } else if (value.length > 0) {
        res = Math.round(num);
    } else {
        res = 0;
    }
    return res;
}

//// BEGIN - TEST
function check(candidate) {
    console.assert(candidate("10") === 10, "Test 1");
    console.assert(candidate("14.5") === 15, "Test 2");
    console.assert(candidate("-15.5") === -16, "Test 3");
    console.assert(candidate("15.3") === 15, "Test 4");
    console.assert(candidate("0") === 0, "Test 0");
}

//// BEGIN - CHECK
check(closestInteger);