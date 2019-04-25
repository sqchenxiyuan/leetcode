/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function(matrix) {
    let n = matrix.length
    let n_2 = Math.floor(n / 2)
    let y_2 = n / 2 === n_2 ? n_2 : n_2 + 1
    let x_2 = n_2
    for (let y = 0; y < y_2; y++){
        for (let x = 0; x < x_2; x++){
            let i = matrix[y][x]
            matrix[y][x] = matrix[n - 1 - x][y]
            matrix[n - 1 - x][y] = matrix[n - 1 - y][n - 1 - x]
            matrix[n - 1 - y][n - 1 - x] = matrix[x][n - 1 - y]
            matrix[x][n - 1 - y] = i
        }
    }
}

// let x = rotate(
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ],
// )
// let x2 = rotate(
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16]
//     ], 
// )
// console.log(123)

