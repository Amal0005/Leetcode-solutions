/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
    let str = ""
    for (let i = 0; i < n; i++) {
        if (n % 2 !== 0) {
            str += "a"
        } else {

            if (i == (n - 1)) {
                str += "b"
                break
            } else {
                str += "a"
            }
        }
    }
    return str
};