/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function (matrix) {
    return matrix.map((v) => v.reduce((a, b) => a + b));

};