/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let str=s.split(" ")
    count=0
    console.log(str)
    for(i=0;i<str.length;i++){
        if(str[i]!==""){
            count++
        }
    }
    return count
};