/*
 * @lc app=leetcode id=329 lang=javascript
 *
 * [329] Longest Increasing Path in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
let longestIncreasingPath = function(matrix) {
    let m = matrix.length
    if (m === 0) return 0
    let n = matrix[0].length
    if (n === 0) return 0

    let cache = new Array(m).fill(0).map(_ => new Array(n).fill(0))

    function findPath(x, y, preNum){
        if (x < 0 || y < 0 || x >= m || y >= n) return 0
        let num = matrix[x][y]
        if (preNum >= num) return 0
        
        if (cache[x][y]) return cache[x][y]
        
        result = Math.max(
            findPath(x - 1, y, num),
            findPath(x + 1, y, num),
            findPath(x, y - 1, num),
            findPath(x, y + 1, num),
        ) + 1
        cache[x][y] = result

        return result
    }

    let max = 1
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            max = Math.max(
                findPath(i, j, -Infinity),
                max
            )
        }
    }

    return max
}
// @lc code=end

// console.log(longestIncreasingPath([
//     [9, 9, 4],
//     [6, 6, 8],
//     [2, 1, 1]
// ]))

// console.log(longestIncreasingPath([
//     [3, 4, 5],
//     [3, 2, 6],
//     [2, 2, 1]
// ]))