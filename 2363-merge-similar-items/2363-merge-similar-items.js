/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
    let arr = [...items1, ...items2];
    let obj = {};
    arr.map((item) => (obj[item[0]] = (obj[item[0]] || 0) + item[1]));
    return Object.entries(obj).map((item) => [parseInt(item[0]), item[1]]);
};