/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
    let arr = [];
    let result = [];
    for (let i = 1; i <= m; i++) {
        arr.push(i);
    }
    for (let i = 0; i < queries.length; i++) {
        let index = arr.indexOf(queries[i]);
        result.push(index);
        arr.splice(index, 1);
        arr.unshift(queries[i]);
    }
    return result;
};