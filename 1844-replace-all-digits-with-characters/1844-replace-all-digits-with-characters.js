/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    let arr = s.split('');
    for (let i = 1; i < arr.length; i += 2) {
        arr[i] = String.fromCharCode(s[i - 1].charCodeAt(0) + parseInt(arr[i]));
    }
    return arr.join('');
};