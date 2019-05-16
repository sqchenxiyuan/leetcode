/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//常数排序
let sortColors = function(nums) {
    let arr = [0, 0, 0]
    for (let i = 0; i < nums.length; i++){
        arr[nums[i]]++
    }

    let count = 0
    for (let i = 0; i < arr.length; i++){
        nums.fill(i, count, count + arr[i])
        count += arr[i]
    }
}

// let x = sortColors([2, 0, 2, 1, 1, 0])

// console.log(x)

