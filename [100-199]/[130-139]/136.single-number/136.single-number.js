/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
    let num = 0
    for (let i = 0; i < nums.length; i++){
        num = num ^ nums[i]
    }
    return num
}

