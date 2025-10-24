/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    let word1 = words1.filter(item => words1.indexOf(item) === words1.lastIndexOf(item))
    let word2 = words2.filter(item => words2.indexOf(item) === words2.lastIndexOf(item))
    let count = 0
    let arr = [...word1, ...word2]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
        }
    }
    return count
};