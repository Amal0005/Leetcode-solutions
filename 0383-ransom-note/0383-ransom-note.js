/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let a = ransomNote.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    let b = magazine.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    while (a.length !== 0 && b.length !== 0) {
        if (b[0] == a[0]) {
            a.shift()
            b.shift()
        } else {
            b.shift()
        }
    }
    return a.length === 0
};