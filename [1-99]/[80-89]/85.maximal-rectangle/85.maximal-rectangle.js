/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
let maximalRectangle = function(matrix) {
    let m = matrix.length
    if (m === 0) return 0
    let n = matrix[0].length
    if (n === 0) return 0

    function largestRectangleArea(heights) {
        heights = [...heights, 0]
        let max = 0
        let stack = []
        for (let i = 0; i < heights.length;){
            if (stack.length === 0 || heights[stack[stack.length - 1]] <= heights[i]){
                stack.push(i++)
            } else {
                let j = stack.pop()
                max = Math.max(max, heights[j] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1))
            }
        }
        return max
    }

    let max = 0
    let heights = new Array(n).fill(0)
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (matrix[i][j] === "1"){
                heights[j]++
            } else {
                heights[j] = 0
            }
        }
        max = Math.max(max, largestRectangleArea(heights))
    }

    return max
}

// console.log(maximalRectangle(
//     [
//         ["1", "0", "1", "0", "0"],
//         ["1", "0", "1", "1", "1"],
//         ["1", "1", "1", "1", "1"],
//         ["1", "0", "1", "1", "0"]
//     ]
// ))

