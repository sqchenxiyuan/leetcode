/**
 * @param {number} N
 * @return {string}
 */
var baseNeg2 = function(N) {
    let bin = N.toString(2)
    bin = Array.from(bin).reverse().map(r => parseInt(r))
    for(let i = 0; i < bin.length; i++){
        if(i % 2 === 1 && bin[i] === 1){
            bin[i+1] = (bin[i+1] || 0) + 1
        } else if(bin[i] > 1){
            bin[i+1] = (bin[i+1] || 0) + bin[i] - 1
            bin[i] = bin[i] % 2
        }
    }
    let s = bin.reverse().join("")
    return s
};

// console.log(baseNeg2(3))
// console.log(baseNeg2(4))
console.log(baseNeg2(7))
