/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function(matrix, target) {
    let m = matrix.length
    if (m === 0) return false
    let n = matrix[0].length
    if (n === 0) return false
    
    //两次二分查找
    let row //匹配的行
    let i = 0, j = m - 1
    while (i <= j){
        let mid = parseInt((i + j) / 2)
        let num = matrix[mid][0]
        if (num === target){
            return true
        } else if (num > target){
            j = mid - 1
        } else if (num < target){
            i = mid + 1
        }
    }

    row = j

    if (row < 0){
        return false
    }


    i = 0
    j = n - 1
    while (i <= j){
        let mid = parseInt((i + j) / 2)
        let num = matrix[row][mid]
        if (num === target){
            return true
        } else if (num > target){
            j = mid - 1
        } else if (num < target){
            i = mid + 1
        }
    }

    return false
}

// console.log(searchMatrix([
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
// ], 0))

// console.log(searchMatrix([
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
// ], 3))

// console.log(searchMatrix([
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
// ], 20))

// console.log(searchMatrix([
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
// ], 25))
