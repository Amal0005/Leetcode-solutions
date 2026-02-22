/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let binary = n.toString(2).split("")
    let arr = []
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == "1") {
            arr.push(i)
        }
    }
    let max = 0
    for (let i = 1; i < arr.length; i++) {
        let m = arr[i] - arr[i - 1]
        if (max < m) max = m
    }
    return max
};