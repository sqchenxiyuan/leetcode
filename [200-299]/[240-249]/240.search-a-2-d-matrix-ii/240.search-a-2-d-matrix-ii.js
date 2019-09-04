/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// let searchMatrix = function(matrix, target) {
//     let m = matrix.length
//     if (m === 0) return false
//     let n = matrix[0].length
//     if (n === 0) return false

//     let cache = new Array(m).fill(0).map(_ => new Array(n).fill(null))

//     function find(x, y){
//         if (cache[x][y] !== null) return cache[x][y]
//         let result = false
//         if (matrix[x][y] === target) result = true
//         else if (matrix[x][y] < target) result = false
//         else if (x > 0 && find(x - 1, y)
//             || y > 0 && find(x, y - 1)){
//             result = true
//         }
//         cache[x][y] = result
//         return result
//     }

//     return find(m - 1, n - 1)
// }

let searchMatrix = function(matrix, target) {
    let m = matrix.length
    if (m === 0) return false
    let n = matrix[0].length
    if (n === 0) return false

    let x = 0
    let y = n - 1
    while (x < m && y >= 0){
        let num = matrix[x][y]
        if (num === target) return true
        else if (target > num) x++
        else y--
    }
    return false
}


// console.log(searchMatrix([
//     [1, 4, 7, 11, 15],
//     [2, 5, 8, 12, 19],
//     [3, 6, 9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30],
//     [19, 22, 24, 27, 31]
// ], 24))

// console.log(searchMatrix([
//     [1, 1]
// ], 2))

// console.log(searchMatrix([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25]
// ], 18))

