/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 *
 * https://leetcode.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (28.37%)
 * Total Accepted:    203.6K
 * Total Submissions: 712.2K
 * Testcase Example:  '[1,2,0]'
 *
 * Given an unsorted integer array, find the smallest missing positive
 * integer.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,0]
 * Output: 3
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,4,-1,1]
 * Output: 2
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [7,8,9,11,12]
 * Output: 1
 * 
 * 
 * Note:
 * 
 * Your algorithm should run in O(n) time and uses constant extra space.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = function(nums) {
    let arr = []
    
    nums.forEach(num => {
        if (num > nums.length || num < 0) return
        arr[num] = true
    })

    let i = 1
    for (; i <= nums.length; i++){
        if (!arr[i]) break
    }

    return i
}


let x = firstMissingPositive([1, 2, 0])
let x1 = firstMissingPositive([3, 4, -1, 1])
let x2 = firstMissingPositive([7, 8, 9, 11, 12])
let x3 = firstMissingPositive([1])
console.log(123)
