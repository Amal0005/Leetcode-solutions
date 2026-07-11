/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const words = s.split(" ")
    let obj = {}
    if (words.length !== pattern.length) return false
    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i]
        if (obj[char]) {
            if (obj[char] !== words[i]) {
                return false
            }
        } else {
            if (Object.values(obj).includes(words[i])) {
                return false
            }
            obj[char] = words[i]
        }
    }
    return true
};