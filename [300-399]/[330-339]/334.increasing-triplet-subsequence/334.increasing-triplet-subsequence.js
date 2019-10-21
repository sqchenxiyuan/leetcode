/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// let increasingTriplet = function(nums) {
//     let len = nums.length
//     let cache = new Array(len).fill(1)//[0，i]最长的递增子序列
    
//     for (let i = 1; i < len; i++){
//         let max = 0
//         for (let j = i - 1; j >= 0; j--){
//             if (nums[i] > nums[j]){
//                 max = Math.max(cache[j], max)
//             }
//         }
//         if (max >= 2) return true
//         cache[i] = max + 1
//     }

//     return false
// }

let increasingTriplet = function(nums) {
    let first = second = Infinity
    let len = nums.length
    for (let i = 0; i < len; i++){
        let num = nums[i]
        if (num <= first){
            first = num
        } else if (num <= second){
            second = num
        } else {
            return true
        }
    }
    return false
}

// @lc code=end

// console.log(increasingTriplet([1, 2, 3, 4, 5]))
// console.log(increasingTriplet([5, 4, 3, 2, 1]))
