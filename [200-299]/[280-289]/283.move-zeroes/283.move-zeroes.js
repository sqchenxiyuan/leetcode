/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function(nums) {
    //交换前往
    let i = j = 0
    while (j < nums.length){
        if (nums[j] !== 0){
            nums[i] = nums[j]
            i++
        }
        j++
    }

    while (i < nums.length){
        nums[i] = 0
        i++
    }
}

