//// BEGIN - PROMPT
//// BEGIN - CANONICAL SOLUTION
/**
 * You have to write a function which validates a given date string and
 * returns true if the date is valid otherwise false.
 * The date is valid if all of the following rules are satisfied:
 * 1. The date string is not empty.
 * 2. The number of days is not less than 1 or higher than 31 days for months 1,3,5,7,8,10,12.
 *    And the number of days is not less than 1 or higher than 30 days for months 4,6,9,11.
 *    And the number of days is not less than 1 or higher than 29 for the month 2.
 * 3. The months should not be less than 1 or higher than 12.
 * 4. The date should be in the format: mm-dd-yyyy
 *
 * @param {string} date
 * @returns {boolean}
 */
function validDate(date) {
    try {
        const str = date.trim();
        const parts = str.split('-');
        if (parts.length !== 3) return false;
        const month = parseInt(parts[0], 10);
        const day = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);
        if (isNaN(month) || isNaN(day) || isNaN(year)) return false;
        if (month < 1 || month > 12) return false;
        let maxDay = 31;
        if ([4, 6, 9, 11].includes(month)) {
            maxDay = 30;
        } else if (month === 2) {
            maxDay = 29;
        }
        if (day < 1 || day > maxDay) return false;
    } catch (e) {
        return false;
    }
    return true;
}

//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate('03-11-2000'), true);
    assert.strictEqual(candidate('15-01-2012'), false);
    assert.strictEqual(candidate('04-0-2040'), false);
    assert.strictEqual(candidate('06-04-2020'), true);
    assert.strictEqual(candidate('01-01-2007'), true);
    assert.strictEqual(candidate('03-32-2011'), false);
    assert.strictEqual(candidate(''), false);
    assert.strictEqual(candidate('04-31-3000'), false);
    assert.strictEqual(candidate('06-06-2005'), true);
    assert.strictEqual(candidate('21-31-2000'), false);
    assert.strictEqual(candidate('04-12-2003'), true);
    assert.strictEqual(candidate('04122003'), false);
    assert.strictEqual(candidate('20030412'), false);
    assert.strictEqual(candidate('2003-04'), false);
    assert.strictEqual(candidate('2003-04-12'), false);
    assert.strictEqual(candidate('04-2003'), false);
}

//// BEGIN - CHECK
check(validDate);