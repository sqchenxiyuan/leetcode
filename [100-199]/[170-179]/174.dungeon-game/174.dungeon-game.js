/*
 * @lc app=leetcode id=174 lang=javascript
 *
 * [174] Dungeon Game
 */
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
let calculateMinimumHP = function(dungeon) {
    let m = dungeon.length
    if (m === 0) return 1
    let n = dungeon[0].length
    if (n === 0) return 1

    let dp = new Array(m).fill(0).map(_ => new Array(n))
    dp[m - 1][n - 1] = Math.max(1 - dungeon[m - 1][n - 1], 1)

    for (let i = n - 2; i >= 0; i--){
        dp[m - 1][i] = Math.max(dp[m - 1][i + 1] - dungeon[m - 1][i], 1)
    }

    for (let i = m - 2; i >= 0; i--){
        dp[i][n - 1] = Math.max(dp[i + 1][n - 1] - dungeon[i][n - 1], 1)
    }

    for (let i = m - 2; i >= 0; i--){
        for (let j = n - 2; j >= 0; j--){
            dp[i][j] = Math.max(Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j], 1)
        }
    }

    return dp[0][0]
}

// console.log(calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]))
// console.log(calculateMinimumHP([[0, 0, 0], [1, 1, -1]]))

