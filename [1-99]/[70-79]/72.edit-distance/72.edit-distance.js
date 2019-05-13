/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
let minDistance = function(word1, word2) {
    let m = word1.length
    let n = word2.length

    let map = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))

    for (let i = 0; i <= m; i++) map[i][0] = i
    for (let j = 0; j <= n; j++) map[0][j] = j

    for (let i = 1; i <= m; i++){
        for (let j = 1; j <= n; j++){
            map[i][j] = Math.min(
                map[i - 1][j] + 1,
                map[i][j - 1] + 1,
                map[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1),
            )
        }
    }

    return map[m][n]
}

// console.log(minDistance("horse", "ros"))
// console.log(minDistance("intention", "execution"))

