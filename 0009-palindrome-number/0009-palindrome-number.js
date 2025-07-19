/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
// s=x.toString()
// t=s.reverse()

b=x.toString().split("").reverse().join("")
if(x==b){
    return true
}else{
    return false
}
}
