/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let a = [word1.length, word2.length];
    let b = Math.max(...a)
    let arr = []
    w1 = word1.split("")
    w2 = word2.split("")
    for (i = 0; i < b; i++) {
        arr.push(w1[i], w2[i])
    }
    return arr.join("")
};