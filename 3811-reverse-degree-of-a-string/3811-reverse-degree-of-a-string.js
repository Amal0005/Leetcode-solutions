/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    const letters = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"]
    let sum = 0
    for (let i = 0; i <= s.length; i++) {
        if (letters.includes(s[i])) {
            let val = 1 + letters.indexOf(s[i])
            console.log(val)
            sum += (val * (i + 1))
        }
    }
    return sum
};