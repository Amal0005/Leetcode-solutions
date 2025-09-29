/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
    let a = Math.abs(z - x)
    let b = Math.abs(z - y)
    if (a == b) {
        return 0
    } else if (a < b) {
        return 1
    } else {
        return 2
    }


};