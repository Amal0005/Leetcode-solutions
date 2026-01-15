/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let one = s1.split(" ")
    let two = s2.split(" ")
    return [...one, ...two].filter((item, index, arr) => arr.indexOf(item) == arr.lastIndexOf(item))
};