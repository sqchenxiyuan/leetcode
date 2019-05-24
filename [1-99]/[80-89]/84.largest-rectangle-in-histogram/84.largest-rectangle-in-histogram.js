/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
// let largestRectangleArea = function(heights) {
//     let leftbig = new Array(heights.length)
//     let rightbig = new Array(heights.length)

//     //寻找左边大或者相等的数目
//     for (let i = 0; i < heights.length; i++){
//         let count = 0
//         let n = i - 1
//         while (n >= 0){
//             if (heights[i] <= heights[n]){
//                 count = count + leftbig[n] + 1
//             }
//             n = n - leftbig[n] - 1
//         }
//         leftbig[i] = count
//     }

//     //寻找右边大或者相等的数目
//     for (let i = heights.length - 1; i >= 0; i--){
//         let count = 0
//         let n = i + 1
//         while (n < heights.length){
//             if (heights[i] <= heights[n]){
//                 count = count + rightbig[n] + 1
//             }
//             n = n + rightbig[n] + 1
//         }
//         rightbig[i] = count
//     }
    
//     let max = 0
//     for (let i = 0; i < heights.length; i++){
//         max = Math.max(max, heights[i] * (leftbig[i] + rightbig[i] + 1))
//     }

//     return max
// }


//网上的快速算法
let largestRectangleArea = function(heights) {
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
                
// console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))

