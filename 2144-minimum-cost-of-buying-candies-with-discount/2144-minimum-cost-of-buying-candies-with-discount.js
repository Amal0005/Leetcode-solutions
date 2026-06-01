/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    let res = 0
    cost.sort((a, b) => b - a)
    for (let i = 0; i < cost.length; i++) {
        cost[i] + cost[i + 1] ? res += (cost[i] + cost[i + 1]) : res += cost[i]
        i += 2
    }
    return res
};