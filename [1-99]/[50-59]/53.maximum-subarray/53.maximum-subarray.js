/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (43.00%)
 * Total Accepted:    486.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
 */
// 寻找相邻子集且内容最大
/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
    //全为负数的情况
    let max = Math.max.apply(null, nums)
    if (max <= 0 ) return max

    let len = nums.length
    let after = []

    //求趋势
    for (let i = 0, j = 0; i < len; i++){
        j = j + nums[i]
        after.push(j)
    }

    //大于右边最小值的为正
    let lmin = 0
    len = after.length
    for (let i = 0; i < len; i++){
        if (after[i] < lmin){
            lmin = after[i]
        } else {
            if (after[i] - lmin > max){
                max = after[i] - lmin
            }
        }
    }

    return max
}

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// console.log(maxSubArray([-1]))
// console.log(maxSubArray([1, 2]))
// console.log(maxSubArray([8, -19, 5, -4, 20]))
// console.log(maxSubArray([-5, 8, -5, 1, 1, -3, 5, 5, -3, -3, 6, 4, -7, -4, -8, 0, -1, -6]))

