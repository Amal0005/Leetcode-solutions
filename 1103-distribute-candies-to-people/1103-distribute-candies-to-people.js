/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let n = num_people
    let arr = new Array(n).fill(0)
    let give = 1
    while (candies > 0) {
        for (let i = 0; i < n; i++) {
            if (candies < give) {
                arr[i] += candies
                candies = 0
            } else {
                arr[i] += give
                candies -= give
                give++
            }
        }
    }
    return arr
};