/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
let prime= new Array(n+1).fill(true)
for(let i=2;i<=n;i++){
    if(prime[i]){
        for(j=i*i;j<=n;j+=i){
            prime[j]=false
        }
    }
}
let result=0
for(i=2;i<n;i++){
if(prime[i]==true&&prime[i]!==1&&prime[i]!==0){
    result++
}
}
return result

};
