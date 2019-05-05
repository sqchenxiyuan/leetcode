/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
let getPermutation = function(n, k) {
    k--
    let num = 1
    let arr = new Array(n).fill(0).map((_, i) => i + 1)
    let result = []

    //初始化n!
    for (let i = 1; i <= n; i++){
        num *= i
    }

    for (let i = 0; i < n; i++){
        num = num / (n - i)

        let now = parseInt(k / num)
        k = k % num

        result[i] = arr.splice(now, 1)[0]
    }

    return result.join("")
}

// console.log(getPermutation(3, 1))
// console.log(getPermutation(3, 2))
// console.log(getPermutation(3, 3))
// console.log(getPermutation(3, 4))
// console.log(getPermutation(3, 5))
// console.log(getPermutation(3, 6))

