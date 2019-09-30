/*
 * @lc app=leetcode id=304 lang=javascript
 *
 * [304] Range Sum Query 2D - Immutable
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
let NumMatrix = function(matrix) {
    let m = matrix.length
    let n = 0
    if (m > 0){
        n = matrix[0].length
    }
    
    let cache = new Array(m).fill(0).map(_ => new Array(n).fill(0))
    if (m > 0 && n > 0) cache[0][0] = matrix[0][0]
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            let sum = 0
            if (i > 0) sum = sum + cache[i - 1][j]
            if (j > 0) sum = sum + cache[i][j - 1]
            if (j > 0 && i > 0) sum = sum - cache[i - 1][j - 1]
            cache[i][j] = sum + matrix[i][j]
        }    
    }

    this.rows = m
    this.clos = n
    this.cache = cache
}

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if (this.rows === 0 && this.clos === 0) return 0
    if (row1 < 0) row1 = 0
    if (col1 < 0) col1 = 0
    if (row2 >= this.rows) row2 = this.rows - 1
    if (col2 >= this.clos) col2 = this.clos - 1

    let cache = this.cache
    let sum = cache[row2][col2]
    if (row1 > 0) sum = sum - cache[row1 - 1][col2]
    if (col1 > 0) sum = sum - cache[row2][col1 - 1]
    if (row1 > 0 && col1 > 0) sum = sum + cache[row1 - 1][col1 - 1]

    return sum
}

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

// let mx = new NumMatrix([
//     [3, 0, 1, 4, 2],
//     [5, 6, 3, 2, 1],
//     [1, 2, 0, 1, 5],
//     [4, 1, 0, 1, 7],
//     [1, 0, 3, 0, 5]
// ])

// console.log(mx.sumRegion(2, 1, 4, 3))
// console.log(mx.sumRegion(1, 1, 2, 2))
// console.log(mx.sumRegion(1, 2, 2, 4))