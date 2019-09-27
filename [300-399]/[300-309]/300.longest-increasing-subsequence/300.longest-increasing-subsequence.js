/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// //n ^ 2
// let lengthOfLIS = function(nums) {
//     if (nums.length === 0) return 0
//     let cache = [] //i作为最后一个的最大递增序列长度
//     cache[0] = 1
//     let max = 1

//     for (let i = 1; i < nums.length; i++){
//         let imax = 1

//         for (let j = 0; j < i; j++){
//             if (nums[i] > nums[j]){
//                 imax = Math.max(imax, cache[j] + 1)
//             }
//         }
//         cache[i] = imax
//         max = Math.max(max, imax)
//     }

//     return max
// }

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
// console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]))

