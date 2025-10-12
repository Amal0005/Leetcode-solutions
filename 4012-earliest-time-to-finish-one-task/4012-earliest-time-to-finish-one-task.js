/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks) {
    let res = []
    for (let i = 0; i < tasks.length; i++) {
        res.push(tasks[i].reduce((a, b) => a + b, 0))
    }
    return Math.min(...res)
};