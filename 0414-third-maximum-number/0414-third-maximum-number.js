/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let dist=[...new Set(nums)];
    num=dist.sort((a,b)=>(b-a))
    if(num.length>=3){
    return dist[2]
}else{
    return dist[0]
}
};