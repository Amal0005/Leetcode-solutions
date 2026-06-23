/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    for (let i = 0; i < s.length; i++) {
        if (s.slice(i, i + part.length) === part) {
            s = s.slice(0, i) + s.slice(i + part.length);
            i = -1
        }
    }
    return s
};