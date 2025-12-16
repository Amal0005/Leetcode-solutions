/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {

    let large = 0
    for (let i = 1; i < s.length; i++) {
        let left = s.slice(0, i).split("").filter((item) => item != "1")
        let right = s.slice(i, s.length).split("").filter((item) => item != "0")
        if (left.length + right.length > large) {
            large = left.length + right.length
        }
    }
    return large
};