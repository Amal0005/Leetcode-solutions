/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    let x = points.map(p => p[0]).sort((a, b) => a - b);
    let ans = 0;
    for (let i = 1; i < x.length; i++) {
        ans = Math.max(ans, x[i] - x[i - 1]);
    }
    return ans;
};