/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let combine = function(n, k) {
    let dp = new Array(n + 1).fill(0).map(_ => new Array(k + 1).fill(0))

    function getCombine(n, k){
        if (n < k || n === 0) return []
        if (!dp[n][k]){
            let arr
            if (k === 1){
                arr = new Array(n).fill(0).map((_, i) => [i + 1])
            } else {
                let x1 = getCombine(n - 1, k - 1)
                x1.forEach(x => x.push(n))
                let x2 = getCombine(n - 1, k)
                arr = x1.concat(x2)
            }
            dp[n][k] = arr
        }

        let arr = dp[n][k].map(data => data.slice())
        return arr
    }

    return getCombine(n, k)
}

// let x = combine(4, 2)
// let x2 = combine(2, 1)
// console.log(123)
