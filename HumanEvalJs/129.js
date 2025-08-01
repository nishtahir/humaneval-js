//// BEGIN - PROMPT
/**
 * Given a grid with N rows and N columns (N >= 2) and a positive integer k,
 * each cell of the grid contains a value. Every integer in the range [1, N * N]
 * inclusive appears exactly once on the cells of the grid.
 *
 * You have to find the minimum path of length k in the grid. You can start
 * from any cell, and in each step you can move to any of the neighbor cells,
 * in other words, you can go to cells which share an edge with you current
 * cell.
 * Please note that a path of length k means visiting exactly k cells (not
 * necessarily distinct).
 * You CANNOT go off the grid.
 * A path A (of length k) is considered less than a path B (of length k) if
 * after making the ordered lists of the values on the cells that A and B go
 * through (let's call them lst_A and lst_B), lst_A is lexicographically less
 * than lst_B, in other words, there exist an integer index i (1 <= i <= k)
 * such that lst_A[i] < lst_B[i] and for any j (1 <= j < i) we have
 * lst_A[j] = lst_B[j].
 * It is guaranteed that the answer is unique.
 * Return an ordered list of the values on the cells that the minimum path go through.
 *
 * Examples:
 *     Input: grid = [ [1,2,3], [4,5,6], [7,8,9]], k = 3
 *     Output: [1, 2, 1]
 *
 *     Input: grid = [ [5,9,3], [4,1,6], [7,8,2]], k = 1
 *     Output: [1]
 */
function minPath(grid, k) {
//// BEGIN - CANONICAL SOLUTION
    const n = grid.length;
    let val = n * n + 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const temp = [];
                if (i !== 0) {
                    temp.push(grid[i - 1][j]);
                }
                if (j !== 0) {
                    temp.push(grid[i][j - 1]);
                }
                if (i !== n - 1) {
                    temp.push(grid[i + 1][j]);
                }
                if (j !== n - 1) {
                    temp.push(grid[i][j + 1]);
                }
                val = Math.min(...temp);
            }
        }
    }
    const ans = [];
    for (let i = 0; i < k; i++) {
        if (i % 2 === 0) {
            ans.push(1);
        } else {
            ans.push(val);
        }
    }
    return ans;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3), [1, 2, 1]);
    assert.deepStrictEqual(candidate([[5, 9, 3], [4, 1, 6], [7, 8, 2]], 1), [1]);
    assert.deepStrictEqual(candidate([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 4), [1, 2, 1, 2]);
    assert.deepStrictEqual(candidate([[6, 4, 13, 10], [5, 7, 12, 1], [3, 16, 11, 15], [8, 14, 9, 2]], 7), [1, 10, 1, 10, 1, 10, 1]);
    assert.deepStrictEqual(candidate([[8, 14, 9, 2], [6, 4, 13, 15], [5, 7, 1, 12], [3, 10, 11, 16]], 5), [1, 7, 1, 7, 1]);
    assert.deepStrictEqual(candidate([[11, 8, 7, 2], [5, 16, 14, 4], [9, 3, 15, 6], [12, 13, 10, 1]], 9), [1, 6, 1, 6, 1, 6, 1, 6, 1]);
    assert.deepStrictEqual(candidate([[12, 13, 10, 1], [9, 3, 15, 6], [5, 16, 14, 4], [11, 8, 7, 2]], 12), [1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6]);
    assert.deepStrictEqual(candidate([[2, 7, 4], [3, 1, 5], [6, 8, 9]], 8), [1, 3, 1, 3, 1, 3, 1, 3]);
    assert.deepStrictEqual(candidate([[6, 1, 5], [3, 8, 9], [2, 7, 4]], 8), [1, 5, 1, 5, 1, 5, 1, 5]);
    // Check some edge cases that are easy to work out by hand.
    assert.deepStrictEqual(candidate([[1, 2], [3, 4]], 10), [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]);
    assert.deepStrictEqual(candidate([[1, 3], [3, 2]], 10), [1, 3, 1, 3, 1, 3, 1, 3, 1, 3]);
}

//// BEGIN - CHECK
check(minPath);