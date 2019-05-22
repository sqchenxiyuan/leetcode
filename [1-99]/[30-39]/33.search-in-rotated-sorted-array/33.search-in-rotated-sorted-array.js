/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (32.70%)
 * Total Accepted:    392.7K
 * Total Submissions: 1.2M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * 
 * You are given a target value to search. If found in the array return its
 * index, otherwise return -1.
 * 
 * You may assume no duplicate exists in the array.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function(nums, target) {
    if (nums.length === 0) return -1

    let i = 0; j = nums.length - 1
    while (i <= j){
        let mid = parseInt((i + j) / 2)
        if (target < nums[mid]){
            if (nums[mid] < nums[j]){
                j = mid - 1
            } else {
                if (target < nums[i]){
                    i = mid + 1
                } else {
                    j = mid - 1
                }
            }
        } else if (target > nums[mid]){
            if (nums[mid] > nums[i]){
                i = mid + 1
            } else {
                if (target > nums[j]){
                    j = mid - 1
                } else {
                    i = mid + 1
                }
            }
        } else {
            return mid
        }
    }
    
    return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
console.log(search([5, 6, 7, 0, 1, 2, 4], 3))
// search([7, 0, 1, 2, 4, 5, 6])
