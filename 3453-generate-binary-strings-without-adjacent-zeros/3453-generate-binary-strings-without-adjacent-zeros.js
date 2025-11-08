/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
    if (n == 0) return [""]
    let arr = []
    let a = validStrings(n - 1)
    for (i of a) {
        arr.push(i + "1")
        arr.push(i + "0")
    }
    return arr.filter((item) => !item.includes("00"))
};