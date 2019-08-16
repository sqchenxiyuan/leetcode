/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
let maximalSquare = function(matrix) {
    let m = matrix.length
    if (m === 0) return 0
    let n = matrix[0].length
    if (n === 0) return 0

    let map = new Array(m).fill(0).map(_ => new Array(n).fill(null))
    let max = 0
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (matrix[i][j] === "1"){
                let data
                if (i === 0 || j === 0){
                    data = 1
                    map[i][j] = 1
                } else {
                    let top = map[i][j - 1]
                    let left = map[i - 1][j]
                    let pre = map[i - 1][j - 1]
                    data = Math.min(top, left, pre) + 1
                    map[i][j] = data
                }
                
                max = Math.max(max, data)
            } else {
                map[i][j] = 0
            }
        }
    }

    return max * max
}

// console.log(maximalSquare([
//     [1, 0, 1, 0, 0],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 0, 0, 1, 0]
// ]))

// console.log(maximalSquare(
//     [
//         ["1", "0", "1", "0", "0"], 
//         ["1", "0", "1", "1", "1"], 
//         ["1", "1", "1", "1", "1"], 
//         ["1", "0", "0", "1", "0"]
//     ]
// ))


