/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function (cost) {
    for (let i = 1; i < cost.length; i++) {
        cost[i - 1] < cost[i] ? cost[i] = cost[i - 1] : null
    }
    return cost
};