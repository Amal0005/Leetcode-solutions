/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
    capacity.sort((a, b) => b - a)
    let total = apple.reduce((acc, curr) => acc + curr, 0)
    let count = 0
    for (let i = 0; i < capacity.length; i++) {
        if (total > 0) {
            total = total - capacity[i]
            count++
        }
    }
    return count
};