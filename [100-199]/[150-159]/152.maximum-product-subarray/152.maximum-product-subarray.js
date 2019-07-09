/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let maxProduct = function(nums) {
    let dpMin = [nums[0]]
    let dpMax = [nums[0]]
    let max = nums[0]
    for (let i = 1; i < nums.length; i++){
        let num = nums[i]
        dpMin[i] = Math.min(dpMin[i - 1] * num, dpMax[i - 1] * num, num)
        dpMax[i] = Math.max(dpMin[i - 1] * num, dpMax[i - 1] * num, num)
        max = Math.max(dpMax[i], max)
    }
    return max
}

