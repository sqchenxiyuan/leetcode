/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = function(nums) {
    let n = nums.length
    let sum = n * (n + 1) / 2
    for (let i = 0; i < n; i++) sum -= nums[i]
    return sum
}

