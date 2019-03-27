/**
 * @param {number[]} A
 * @return {number}
 */
let sumSubseqWidths = function(A) {
    A.sort((a, b) => a - b)

    let pow2Map = {}
    function pow2(l){
        if (l === 0) return 1
        if (pow2Map[l]) return pow2Map[l]
        pow2Map[l] = (pow2(l - 1) * 2) % 1000000007
        return pow2Map[l]
    }

    let sum = 0
    let l = A.length
    for (let i = 0; i < A.length; i++){
        sum = (sum + A[i] * pow2(i)) % 1000000007
        sum = (sum - A[i] * pow2(l - i - 1)) % 1000000007
    }

    return (sum + 1000000007) % 1000000007
}

console.log(sumSubseqWidths([2, 1, 3]))