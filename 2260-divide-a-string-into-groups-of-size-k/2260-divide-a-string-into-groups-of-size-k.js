/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    let arr = []
    let a = 0
    for (let i = 0; i < s.length; i += k) {
        let str = ""
        for (let j = 0; j < k; j++) {
            if (s[a] == undefined) {
                str += fill
            } else {
                str += s[a]
                a++
            }
        }
        arr.push(str)
    }
    return arr
};