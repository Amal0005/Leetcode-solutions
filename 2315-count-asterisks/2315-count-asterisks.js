/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    let words = s.split("|").filter((val, i) => i % 2 === 0).join("");
    let count = 0
    for (let i = 0; i < words.length; i++) {
        if (words[i] == "*") {
            count++
        }
    }
    return count
};