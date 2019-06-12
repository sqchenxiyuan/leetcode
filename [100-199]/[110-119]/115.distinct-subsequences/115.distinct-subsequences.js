/*
 * @lc app=leetcode id=115 lang=javascript
 *
 * [115] Distinct Subsequences
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
let numDistinct = function(s, t) {
    let m = s.length
    let n = t.length

    let cache = new Array(n + 1).fill(0).map(_ => new Array(m + 1).fill(0))

    for (let j = 0; j <= m; j++){
        cache[0][j] = 1
    }

    for (let i = 1; i <= n; i++){
        for (let j = i; j <= m; j++){
            if (t[i - 1] === s[j - 1]){
                cache[i][j] = cache[i - 1][j - 1] + cache[i][j - 1]
            } else {
                cache[i][j] = cache[i][j - 1]
            }
            // console.log(i, j, cache[i][j] )
        }
    }
    
    return cache[n][m]
}

// console.log(numDistinct("rabbbit", "rabbit"))
// console.log(numDistinct("babgbag", "bag"))

