/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let uniquePaths = function(m, n) {
    let cache = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))

    function uniquePath(m, n){
        if (cache[m][n]) return cache[m][n]
        if (m === 1 || n === 1) return 1

        let sum = 0
        if (m > 1){
            sum += uniquePath(m - 1, n)
        }

        if (n > 1){
            sum += uniquePath(m, n - 1)
        }
        cache[m][n] = sum
        return sum
    }

    return uniquePath(m, n)
}

// console.log(uniquePaths(3, 2))
// console.log(uniquePaths(7, 3))
