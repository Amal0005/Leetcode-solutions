/**
 * @param {number[]} nums
 * @return {number}
 */
maximumXOR = (nums) => {
    let res = 0;
    for (let num of nums) {
        res = res | num;
    }
    return res;
}