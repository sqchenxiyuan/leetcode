/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function(matrix) {
    if (matrix.length === 0) return []

    let result = []

    function read(top, bottom, left, right){
        if (top > bottom || left > right) return

        for (let i = left; i <= right; i++){
            result.push(matrix[top][i])
        }

        for (let i = top + 1; i <= bottom - 1; i++){
            result.push(matrix[i][right])
        }

        if (top !== bottom){
            for (let i = right; i >= left; i--){
                result.push(matrix[bottom][i])
            }
        }

        if (left !== right){
            for (let i = bottom - 1; i >= top + 1; i--){
                result.push(matrix[i][left])
            }
        }

        read(top + 1, bottom - 1, left + 1, right - 1)
    }

    read(0, matrix.length - 1, 0, matrix[0].length - 1)

    return result 
}


// let x = spiralOrder(
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ]
// )
// let x2 = spiralOrder(
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12]
//     ]
// )
// let x3 = spiralOrder(
//     [
//         [1],
//         [2],
//         [3]
//     ]
// )

// console.log(123)
