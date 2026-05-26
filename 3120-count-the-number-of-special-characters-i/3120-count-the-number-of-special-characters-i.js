/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    return [...new Set(word.toLowerCase())].filter((item) => word.includes(item) && word.includes(item.toUpperCase())).length
};