/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    let s = 0
    let arr = []
    for(let i = 0; i < A.length; i++){
        s = s * 2
        if(A[i] === 1){
            s = s + 1
        }
        s = s % 10
        arr.push(s === 0 || s === 5)
    }
    return arr
};