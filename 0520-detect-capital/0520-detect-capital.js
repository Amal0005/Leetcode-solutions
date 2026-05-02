/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    words = word.toUpperCase()
    words1 = word.toLowerCase()
    wor = word.split("");
    w = wor.slice(0, 1).join("").toUpperCase()
    o = wor.slice(1).join("").toLowerCase()
    final = w + o

    if (word == words || word == words1 || word == final) {
        return true
    } else {
        return false
    }
};