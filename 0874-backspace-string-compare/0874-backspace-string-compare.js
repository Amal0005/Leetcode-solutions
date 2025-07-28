/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let arr=[]
    for(i=0;i<s.length;i++){
        arr.push(s[i])
        if(s[i]=="#"){
            arr.pop()
            arr.pop()
        }
    }
        arr2=[]
      for(i=0;i<t.length;i++){
        arr2.push(t[i])
        if(t[i]=="#"){
            arr2.pop()
            arr2.pop()
        }
    }
    console.log(arr2)
    if(arr.join("")==arr2.join("")){
        return true
    }else{
        return false
    }
};