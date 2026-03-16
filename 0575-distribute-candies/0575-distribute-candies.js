/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let can=candyType.length/2
    let arr=[...new Set(candyType)]
  return arr.length<can?arr.length:can
};