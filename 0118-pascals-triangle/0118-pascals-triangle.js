/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = []
    for (i = 0; i < numRows; i++) {
        let arr = []
        for (j = 0; j <= i; j++) {
            if (j == 0 || j === i) {
                arr.push(1)
            } else {
                let val = res[i - 1][j - 1] + res[i - 1][j]
                arr.push(val)
            }
        }
        res.push(arr)
    }
    return res
};