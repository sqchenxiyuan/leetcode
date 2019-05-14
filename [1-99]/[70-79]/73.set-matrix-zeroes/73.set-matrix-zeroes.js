/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let setZeroes = function(matrix) {
    let m = matrix.length
    if (m === 0) return []
    let n = matrix[0].length
    //存储这第一行一列是否该被清除
    let flagFirstRow = 0
    let flagFirstCol = 0
    if (matrix[0][0] === 0) flag = 1

    //记录
    for (let i = 0; i < m; i++){
        if (matrix[i][0] === 0){
            flagFirstCol = 1
            break
        }
    }

    for (let j = 0; j < n; j++){
        if (matrix[0][j] === 0){
            flagFirstRow = 1
            break
        }
    }

    //对第一行做标记
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (matrix[i][j] === 0){
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }

    //清除
    for (let i = 1; i < m; i++){
        if (matrix[i][0] === 0){
            for (let j = 1; j < n; j++){
                matrix[i][j] = 0
            }
        }
    }

    for (let j = 1; j < n; j++){
        if (matrix[0][j] === 0){
            for (let i = 1; i < m; i++){
                matrix[i][j] = 0
            }
        }
    }

    if (flagFirstRow) for (let j = 0; j < n; j++) matrix[0][j] = 0
    if (flagFirstCol) for (let i = 0; i < m; i++) matrix[i][0] = 0


    return matrix
}

// let x1 = setZeroes([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1]
// ])

// let x2 = setZeroes([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5]
// ])

// let x3 = setZeroes([
//     [1, 1, 1],
//     [0, 1, 2]
// ])

// console.log(123)
