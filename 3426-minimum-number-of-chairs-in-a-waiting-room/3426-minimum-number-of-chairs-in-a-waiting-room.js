/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
    let chair = 0
    let a = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "E") {
            a++
            if (a > chair) {
                chair++
            }
        } else {
            a--;
        }
    }
    return chair;
};