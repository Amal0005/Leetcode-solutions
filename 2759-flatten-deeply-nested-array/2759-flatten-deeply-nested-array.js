/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let arr2=[];
    for(let char of arr){
        if(Array.isArray(char)&&n>0){
            arr2.push(...flat(char,n-1))
        }else{
            arr2.push(char)
        }
    }
    return arr2
};