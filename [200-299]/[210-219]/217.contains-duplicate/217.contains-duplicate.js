/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++){
        if (map[nums[i]]) return true
        map[nums[i]] = true
    }
    return false
}

// console.log(containsDuplicate([1, 2, 3, 1]))
// console.log(containsDuplicate([1, 2, 3, 4]))
