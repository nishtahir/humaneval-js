//// BEGIN - PROMPT
/**
 * It is the last week of the semester and the teacher has to give the grades
 * to students. The teacher has been making her own algorithm for grading.
 * The only problem is, she has lost the code she used for grading.
 * She has given you a list of GPAs for some students and you have to write
 * a function that can output a list of letter grades using the following table:
 *      GPA       |    Letter grade
 *       4.0                A+
 *     > 3.7                A 
 *     > 3.3                A- 
 *     > 3.0                B+
 *     > 2.7                B 
 *     > 2.3                B-
 *     > 2.0                C+
 *     > 1.7                C
 *     > 1.3                C-
 *     > 1.0                D+ 
 *     > 0.7                D 
 *     > 0.0                D-
 *       0.0                E
 */
function numericalLetterGrade(grades) {
//// BEGIN - CANONICAL SOLUTION
    const letterGrade = [];
    for (const gpa of grades) {
        if (gpa === 4.0) {
            letterGrade.push("A+");
        } else if (gpa > 3.7) {
            letterGrade.push("A");
        } else if (gpa > 3.3) {
            letterGrade.push("A-");
        } else if (gpa > 3.0) {
            letterGrade.push("B+");
        } else if (gpa > 2.7) {
            letterGrade.push("B");
        } else if (gpa > 2.3) {
            letterGrade.push("B-");
        } else if (gpa > 2.0) {
            letterGrade.push("C+");
        } else if (gpa > 1.7) {
            letterGrade.push("C");
        } else if (gpa > 1.3) {
            letterGrade.push("C-");
        } else if (gpa > 1.0) {
            letterGrade.push("D+");
        } else if (gpa > 0.7) {
            letterGrade.push("D");
        } else if (gpa > 0.0) {
            letterGrade.push("D-");
        } else {
            letterGrade.push("E");
        }
    }
    return letterGrade;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    assert.deepStrictEqual(candidate([4.0, 3, 1.7, 2, 3.5]), ['A+', 'B', 'C-', 'C', 'A-']);
    assert.deepStrictEqual(candidate([1.2]), ['D+']);
    assert.deepStrictEqual(candidate([0.5]), ['D-']);
    assert.deepStrictEqual(candidate([0.0]), ['E']);
    assert.deepStrictEqual(candidate([1, 0.3, 1.5, 2.8, 3.3]), ['D', 'D-', 'C-', 'B', 'B+']);
    assert.deepStrictEqual(candidate([0, 0.7]), ['E', 'D-']);
}

//// BEGIN - CHECK
check(numericalLetterGrade);