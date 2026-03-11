/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function (s) {
    let vowels = ["a", "e", "i", "o", "u"]
    let newStr = ""
    for (let i = s.length - 1; i >= 0; i--) {
        if (!vowels.includes(s[i])) {
            return s.slice(0, i + 1);
        }
    }
    return ""
};