/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
      let arr=[];
    for (i=0;i<words.length;i++) {
        if (words[i].includes(separator)) {
            let a=words[i].split(separator);
            for (j=0;j<a.length;j++) {
                if(a[j]!=="") {
                    arr.push(a[j])
                }
            }

        }else{
            arr.push(words[i])
        }

    }
    return arr

};