/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let arr1 = []
    let arr2 = []
    for (i = 0; i < s.length; i++) {
        arr1.push(s.indexOf(s[i]))
        arr2.push(t.indexOf(t[i]))
    }
    return JSON.stringify(arr1) === JSON.stringify(arr2)
};