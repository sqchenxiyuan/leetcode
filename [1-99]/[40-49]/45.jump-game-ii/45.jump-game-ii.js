/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 *
 * https://leetcode.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (27.64%)
 * Total Accepted:    163.5K
 * Total Submissions: 587.3K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that
 * position.
 * 
 * Your goal is to reach the last index in the minimum number of jumps.
 * 
 * Example:
 * 
 * 
 * Input: [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
 * ⁠   Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * 
 * Note:
 * 
 * You can assume that you can always reach the last index.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let jump = function(nums) {
    let len = nums.length
    let cache = new Array(len).fill(-1)
    cache[0] = 0

    let p = 0
    let nextp = 1//下一个需要感染的
    while (cache[len - 1] === -1){
        let num = nums[p]
        let round = cache[p]
        while (num + p >= nextp){
            cache[nextp] = round + 1
            nextp++
        }
        p++
    }

    return cache[len - 1]
}

// console.log(jump([2, 3, 1, 1, 4]))//2
// console.log(jump([2]))//0
// console.log(jump([2, 12]))//1
