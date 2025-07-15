//// BEGIN - PROMPT
/**
 * Return median of elements in the list l.
 *
 * @param {number[]} l - array of numbers
 * @returns {number} median of the array
 *
 * >>> median([3, 1, 2, 4, 5])
 * 3
 * >>> median([-10, 4, 6, 1000, 10, 20])
 * 15.0
 */
function median(l) {
    // Canonical solution
    const sorted = [...l].sort((a, b) => a - b);
    const n = sorted.length;
    if (n % 2 === 1) {
        return sorted[Math.floor(n / 2)];
    } else {
        return (sorted[n / 2 - 1] + sorted[n / 2]) / 2.0;
    }
}

//// BEGIN - TEST
const METADATA = {};

function check(candidate) {
    if (candidate([3, 1, 2, 4, 5]) !== 3) throw new Error('Test 1 failed');
    if (candidate([-10, 4, 6, 1000, 10, 20]) !== 8.0) throw new Error('Test 2 failed');
    if (candidate([5]) !== 5) throw new Error('Test 3 failed');
    if (candidate([6, 5]) !== 5.5) throw new Error('Test 4 failed');
    if (candidate([8, 1, 3, 9, 9, 2, 7]) !== 7) throw new Error('Test 5 failed');
}

//// BEGIN - CHECK
check(median);