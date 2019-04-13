/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (33.09%)
 * Total Accepted:    284.6K
 * Total Submissions: 855.4K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * If the target is not found in the array, return [-1, -1].
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function(nums, target) {
    let left = -1, right = -1
    let nright = -1//用于第二次二分加速
    
    let i = 0; j = nums.length - 1
    while (i <= j){
        let mid = parseInt((i + j) / 2)
        let midnum = nums[mid]
        if (midnum < target){
            i = mid + 1
        } else if (midnum > target){
            j = mid - 1
        } else {
            if (nright < 0) nright = j
            if (nums[mid - 1] < target || mid === 0){
                left = mid
                break
            } else {
                j = mid - 1
            } 
        }
    }

    i = left
    j = nright
    while (i <= j){
        let mid = parseInt((i + j) / 2)
        let midnum = nums[mid]
        if (midnum < target){
            i = mid + 1
        } else if (midnum > target){
            j = mid - 1
        } else {
            if (nums[mid + 1] > target || mid === nums.length - 1){
                right = mid
                break
            } else {
                i = mid + 1
            } 
        }
    }

    return [left, right]
}

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
// console.log(searchRange([1], 1))

