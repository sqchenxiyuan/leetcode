/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = function(nums) {
    let leftNum = 1
    let rightNum = 1
    let left = []
    for (let i = 0; i < nums.length; i++){
        left[i] = leftNum
        leftNum *= nums[i]
    }

    let result = []
    for (let i = nums.length - 1; i >= 0; i--){
        result[i] = rightNum * left[i]
        rightNum *= nums[i]
    }

    return result
}


// console.log(productExceptSelf([1, 2, 3, 4]))

