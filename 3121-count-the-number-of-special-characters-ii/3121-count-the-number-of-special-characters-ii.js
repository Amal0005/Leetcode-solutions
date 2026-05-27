/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let count = 0;
    for (let ch of "abcdefghijklmnopqrstuvwxyz") {
        if (
            word.lastIndexOf(ch) <
            word.indexOf(ch.toUpperCase()) &&
            word.includes(ch) &&
            word.includes(ch.toUpperCase())
        ) {
            count++;
        }
    }
    return count;
    };