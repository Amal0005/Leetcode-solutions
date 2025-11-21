/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let arr1 = []
        for (let j = 0; j < size; j++) {
            arr1.push(arr[i])
            i++
        }
        res.push(arr1.filter((item) => item !== undefined))
        i--
    }
    return res
};
