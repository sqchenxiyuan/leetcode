/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
let kthSmallest = function(matrix, k) {
    let n = matrix.length

    let left = matrix[0][0], right = matrix[n - 1][n - 1] + 1
    while (left < right){
        let mid = Math.floor((left + right) / 2)
        let count = 0, j = n - 1
        for (let i = 0; i < n; i++){
            while (j >= 0 && matrix[i][j] > mid) j--
            count = count + (j + 1)
        }
        if (count < k) left = mid + 1
        else right = mid
    }
    return left
}
// @lc code=end


// console.log(kthSmallest([
//     [-5]
// ], 1))

// console.log(kthSmallest([
//     [1, 2],
//     [1, 3],
// ], 2))

// console.log(kthSmallest([
//     [1, 5, 9],
//     [10, 11, 13],
//     [12, 14, 15]
// ], 8))

// console.log(kthSmallest([
//     [1, 3, 5], 
//     [6, 7, 12], 
//     [11, 14, 14]
// ], 3))
