/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function (n) {
    let dSum = n.toString().split("").reduce((acc, curr) => acc += parseInt(curr), 0)
    let sSum = n.toString().split("").reduce((acc, curr) => acc += parseInt(curr * curr), 0)
    return sSum - dSum >= 50
};