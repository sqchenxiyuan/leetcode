/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
let fairCandySwap = function(A, B) {
    let sumA = A.reduce((sum, x) => sum + x, 0)
    let sumB = B.reduce((sum, x) => sum + x, 0)
    A.sort((a, b) => a - b)
    B.sort((a, b) => a - b)

    let d = sumA - sumB
    let i = 0, j = 0
    while (i < A.length && j < B.length){
        let x = A[i] - B[j]
        if (2 * x === d){
            break
        } else if (2 * x < d){
            i++
        } else {
            j++
        }
    }

    return [A[i], B[j]]
}

console.log(fairCandySwap([1, 1], [2, 2]))
console.log(fairCandySwap([1, 2], [2, 3]))
console.log(fairCandySwap([2], [1, 3]))
console.log(fairCandySwap([1, 2, 5], [2, 4]))