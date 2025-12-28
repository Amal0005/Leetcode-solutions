/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let a = grid.flat()
    count = 0
    for (i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            count++
        }
    }
    return count
};