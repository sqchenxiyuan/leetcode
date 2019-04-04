/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.59%)
 * Total Accepted:    512.1K
 * Total Submissions: 2.2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    let out = []

    for (let i = 0; i < nums.length; i++){
        let target = -nums[i]
        let start = i + 1
        let end = nums.length - 1
        while (start < end){
            let sum = nums[start] + nums[end]
            if (sum > target){
                end--
            } else if (sum < target){
                start++
            } else {
                out.push([nums[i], nums[start], nums[end]])
                end--
                while (nums[end] === nums[end + 1]){
                    end--
                }
                while (nums[start] === nums[start - 1]){
                    start++
                }
            }
        }
        while (nums[i + 1] === nums[i]){
            i++
        }
    }

    return out
}
