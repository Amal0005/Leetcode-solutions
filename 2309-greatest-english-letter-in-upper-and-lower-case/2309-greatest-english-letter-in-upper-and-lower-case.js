/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
    let a = [...new Set(s.toUpperCase())].filter((item) => s.includes(item) && s.includes(item.toLowerCase())).sort()
    return a.length ? a[a.length - 1] : ""
};