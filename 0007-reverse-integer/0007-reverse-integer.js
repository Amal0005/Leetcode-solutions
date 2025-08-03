/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr=""
    a=x.toString().split("");
    for(let i=a.length-1;i>=0;i--){
        if(a[i]!=="-"){
            arr+=a[i]
        }
    }
    let b;
// let b=x>0 ? Number(arr):-Number(arr)   
if(x>0){
    b=Number(arr)
}else{
    b=-Number(arr)
}
console.log(b)

if(b<-2147483648||b>2147483648)
{
 return 0;
}
return b
};