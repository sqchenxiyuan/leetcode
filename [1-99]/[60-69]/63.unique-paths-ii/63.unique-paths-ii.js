/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
let uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length
    if (m === 0) return 0    
    let n = obstacleGrid[0].length

    let cache = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))
    cache[0][1] = 1

    for (let i = 1; i <= m; i++){
        for (let j = 1; j <= n; j++){
            if (obstacleGrid[i - 1][j - 1] === 0){
                cache[i][j] = cache[i][j - 1] + cache[i - 1][j]
            }
        }
    }

    return cache[m][n]
}

// console.log(uniquePathsWithObstacles(
//     [
//         [0, 0, 0],
//         [0, 1, 0],
//         [0, 1, 0]
//     ]
// ))
