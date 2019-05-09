/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
let minPathSum = function(grid) {
    let m = grid.length
    if (m === 0) return 0    
    let n = grid[0].length

    let cache = new Array(m).fill(0).map(_ => new Array(n).fill(0))
    cache[0][0] = grid[0][0]

    for (let i = 1; i < m; i++){
        cache[i][0] = grid[i][0] + cache[i - 1][0]
    }

    for (let j = 1; j < n; j++){
        cache[0][j] = grid[0][j] + cache[0][j - 1]
    }

    for (let i = 1; i < m; i++){
        for (let j = 1; j < n; j++){
            cache[i][j] = Math.min(cache[i][j - 1], cache[i - 1][j]) + grid[i][j]
        }
    }

    return cache[m - 1][n - 1]
}

// console.log(minPathSum([
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1]
// ]))

