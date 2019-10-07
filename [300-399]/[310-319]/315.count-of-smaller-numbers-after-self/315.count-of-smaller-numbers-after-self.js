/*
 * @lc app=leetcode id=315 lang=javascript
 *
 * [315] Count of Smaller Numbers After Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//暴力破解 O(n^2)
// let countSmaller = function(nums) {
//     let n = nums.length
//     let result = new Array(n).fill(0)
//     result[n - 1] = 0
//     for (let i = n - 2; i >= 0; i--){
//         let big = 0
//         for (let j = i + 1; j < n; j++){
//             if (nums[i] > nums[j]){
//                 big++
//             }    
//         }
//         result[i] = big
//     }
//     return result
// }

//合并交换，数被超越时加一

// @lc code=end

// let x1 = countSmaller([5, 2, 6, 1])
// console.log(123)