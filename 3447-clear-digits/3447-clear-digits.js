/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let str = []
    for (let i = 0; i < s.length; i++) {
        if (num.includes(s[i])) {
            str.pop()
        } else {
            str.push(s[i])
        }
    }
    return str.join("")
};