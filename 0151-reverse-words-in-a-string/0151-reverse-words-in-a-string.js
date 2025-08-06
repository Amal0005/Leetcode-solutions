/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    a=s.split(" ")
    stack=[]
    for(i of a){
        if(i.length>0){
        stack.push(i)
    }
    }
    let current="";
    while(stack.length){
        if(current.length>0){
        current+=" "
    }
    current+=stack.pop();
    }
 
    return current
};