/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (42.22%)
 * Total Accepted:    277.7K
 * Total Submissions: 651K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * 
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * 
 */

//原算法
// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// let trap = function(height) {
//     let left = []
//     let right = []
    
//     let max = 0
//     for (let i = 0; i < height.length; i++){
//         left[i] = max
//         max = Math.max(height[i], max)
//     }

//     max = 0
//     for (let i = height.length - 1; i >= 0; i--){
//         right[i] = max
//         max = Math.max(height[i], max)
//     }

//     let count = 0
//     for (let i = 0; i < height.length; i++){
//         let h = Math.min(left[i], right[i])
//         count += Math.max((h - height[i]), 0)
//     }
//     return count
// }

//优化
let trap = function(height) {
    let left = []
    
    let max = 0
    for (let i = 0; i < height.length; i++){
        left[i] = max
        max = Math.max(height[i], max)
    }

    let count = 0
    max = 0
    for (let i = height.length - 1; i >= 0; i--){
        let h = Math.min(left[i], max)
        count += Math.max((h - height[i]), 0)

        max = Math.max(height[i], max)
    }

    return count
}

let x = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
let x1 = trap([1])
let x2 = trap([1, 2])
let x3 = trap([2, 1, 2])
console.log(1)

