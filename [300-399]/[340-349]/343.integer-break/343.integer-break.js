/*
 * @lc app=leetcode id=343 lang=javascript
 *
 * [343] Integer Break
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let integerBreak = function(n) {
    let cache = []
    cache[0] = 0
    cache[1] = 0
    cache[2] = 1

    for (let i = 3; i <= n; i++){
        let max = 0
        for (let j = 2; j < i; j++){
            max = Math.max((i - j) * Math.max(cache[j], j), max)
        }
        cache[i] = max
    }
    return cache[n]
}
// @lc code=end

// console.log(integerBreak(2))
// console.log(integerBreak(10))
