/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let arr = [0]
    let sum = 0
    for (let i = 0; i < gain.length; i++) {
        sum += gain[i]
        arr.push(sum)
    }
    return Math.max(...arr)
};