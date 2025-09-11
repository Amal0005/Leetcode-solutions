/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    ss = s.trim(s).split(" ")

    return (ss[ss.length - 1].length)
};