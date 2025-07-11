/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
      let arr=[]
    for(let i=0;i<mountain.length;i++){
        if(mountain[i-1]<mountain[i]&&mountain[i]>mountain[i+1]){
            arr.push(i)
        }
    }
    return arr
};