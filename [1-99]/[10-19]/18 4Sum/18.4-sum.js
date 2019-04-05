/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (29.90%)
 * Total Accepted:    221.1K
 * Total Submissions: 735.8K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers and an integer target, are there elements
 * a, b, c, and d in nums such that a + b + c + d = target? Find all unique
 * quadruplets in the array which gives the sum of target.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate quadruplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * A solution set is:
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)

    let result = []

    for (let i = 0; i < nums.length; i++){
        if (nums[i] === nums[i - 1]) continue
        
        let sumtarget = target - nums[i]

        for (let j = i + 1; j < nums.length; j++){
            if (j > i + 1 && nums[j] === nums[j - 1]) continue

            let sumtarget2 = sumtarget - nums[j]
            let p = j + 1, q = nums.length - 1
            while (p < q){
                if (nums[p] + nums[q] > sumtarget2){
                    q--
                    while (nums[q] === nums[q + 1]) q--
                } else if (nums[p] + nums[q] < sumtarget2){
                    p++
                    while (nums[p] === nums[p - 1]) p++
                } else {
                    result.push([nums[i], nums[j], nums[p], nums[q]])
                    p++
                    while (nums[p] === nums[p - 1]) p++
                }
            }
        }
    }

    return result
}

