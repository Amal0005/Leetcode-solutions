/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (order, friends) {
    let final = []
    for (i of order) {
        if (friends.includes(i)) {
            final.push(i)
        }
    }
    return final
};