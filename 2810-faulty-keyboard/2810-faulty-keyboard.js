/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    const arr = [];
    for (i of s) {
        i === 'i'
            ? arr.reverse()
            : arr.push(i);
    }
    return arr.join('');
};