/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let res=""
    if(n%2!==0){
        for(let i=0;i<n;i++){
            res+="a"
        }
    }else{
           for(let i=0;i<n;i++){
            if(i==n-1){
                res+="b"
                break
            }
            res+="a"
        }
    }
    return res
};