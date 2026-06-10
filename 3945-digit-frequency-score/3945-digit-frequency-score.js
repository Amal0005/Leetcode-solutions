/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function (n) {
    let length = n.toString()
    let sum = 0
    for (let i = 0; i < length.length; i++) {
        sum += parseInt(length[i])
    }
    return sum
};