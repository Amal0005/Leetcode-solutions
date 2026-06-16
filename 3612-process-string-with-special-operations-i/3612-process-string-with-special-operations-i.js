/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
    let res = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "*") {
            res.pop()
        } else if (s[i] == "#") {
            res.push(...res)
        } else if (s[i] == "%") {
            res.reverse()
        }
        else {
            res.push(s[i])
        }
    }
    return res.join("")
};