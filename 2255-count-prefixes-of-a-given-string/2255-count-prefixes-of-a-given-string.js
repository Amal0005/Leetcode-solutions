/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
    let val = ""
    let arr = []
    for (let i = 0; i < s.length; i++) {
        val += s[i]
        for (let j = 0; j < words.length; j++) {
            if (words[j] == val) {
                arr.push(words[i])
            }
        }
    }
    return arr.length
};