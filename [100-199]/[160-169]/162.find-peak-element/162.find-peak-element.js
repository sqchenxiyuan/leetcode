/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let findPeakElement = function(nums) {
    let i = 0, j = nums.length - 1
    while (i < j){
        let mid = parseInt((i + j) / 2)

        if (nums[mid] < nums[mid + 1]){
            i = mid + 1
        } else {
            j = mid
        }
    }

    return i
}

