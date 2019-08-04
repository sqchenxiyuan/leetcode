/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
let minSubArrayLen = function(s, nums) {
    let l = nums.length
    let result = Infinity
    let left = 0
    let sum = 0
    for (let i = 0; i < l; i++){
        sum += nums[i]
        while (sum >= s){
            result = Math.min(result, i + 1 - left)
            sum -= nums[left++]
        }
    }

    return (result !== Infinity) ? result : 0
}

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
// console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]))
