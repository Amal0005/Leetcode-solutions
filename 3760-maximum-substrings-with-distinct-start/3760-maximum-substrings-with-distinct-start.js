/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function (s) {
    let mid = Math.floor((s.length / 2))
    let left = s.slice(0, mid).split("").filter((item, index, arr) => arr.indexOf(item) === index);
    let right = s.slice(mid).split("").filter((item, index, arr) => arr.indexOf(item) === index);

    let res = [...new Set([...left, ...right])]
    return res.length
};