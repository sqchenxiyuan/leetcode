/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (40.53%)
 * Total Accepted:    374K
 * Total Submissions: 922K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 * 
 * You may assume no duplicates in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,5,6], 5
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,3,5,6], 2
 * Output: 1
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [1,3,5,6], 7
 * Output: 4
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: [1,3,5,6], 0
 * Output: 0
 * 
 * 
 */
//二分查找
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function(nums, target) {
    let i = 0, j = nums.length - 1
    while (i <= j){
        let c = parseInt((i + j) / 2)
        let cnum = nums[c]
        if (cnum < target){
            i = c + 1
        } else if (cnum > target){
            j = c - 1
        } else {
            return c
        }
    }

    if (i > j){
        return i
    } else {
        return j
    }
}

// console.log(searchInsert([1, 3, 5, 6], 2))
