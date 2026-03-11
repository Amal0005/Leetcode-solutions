/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    costs.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < costs.length; i++) {
        if (costs[i] <= coins) {
            coins -= costs[i]
            count++
        } else {
            break
        }
    }
    return count
};