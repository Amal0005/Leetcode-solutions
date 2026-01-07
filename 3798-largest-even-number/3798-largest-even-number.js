/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function (s) {
    let a = s.lastIndexOf('2')
    if (a == -1) return ''
    return s.slice(0, a + 1)
};