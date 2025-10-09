/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let arr = grid.flat()
    let final = []
    let index = []
    let dup = arr.filter((val, index, arr) => arr.indexOf(val) !== arr.lastIndexOf(val))
    let unique = [...new Set(dup)]
    console.log(dup)
    for (let i = 1; i <= arr.length; i++) {
        index.push(i)
        if (!arr.includes(index[i - 1])) {
            final.push(...unique, index[i - 1])
        }
    }
    return final
};