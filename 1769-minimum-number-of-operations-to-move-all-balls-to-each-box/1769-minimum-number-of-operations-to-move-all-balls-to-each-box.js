/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    let arr = []
    for (let i = 0; i < boxes.length; i++) {
        let final = 0
        for (let j = 0; j < boxes.length; j++) {
            if (boxes[j] == "1") {
                final += Math.abs(i - j)
            }
        }
        arr.push(final)
    }
    return arr
};