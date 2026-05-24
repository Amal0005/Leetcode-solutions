/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let obj = {};
    for (let str of strs) {
        let key = str.split("").sort().join("");
        if (!obj[key]) {
            obj[key] = [];
        }
        obj[key].push(str)
    }
    return Object.values(obj)
};