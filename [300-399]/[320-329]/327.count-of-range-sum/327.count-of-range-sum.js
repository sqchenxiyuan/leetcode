/*
 * @lc app=leetcode id=327 lang=javascript
 *
 * [327] Count of Range Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
let countRangeSum = function(nums, lower, upper) {
    let cache = [0]
    for (let i = 0; i < nums.length; i++){
        cache[i + 1] = cache[i] + nums[i]
    }

    //cache[i] - cache[j] < [lower, upper]
    //也可以利用合并排序，让两边的进行排序，然后慢慢扩展查询即可
    let count = 0
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j <= nums.length; j++){
            if (lower <= cache[j] - cache[i] 
                && cache[j] - cache[i] <= upper){
                count++
            }
        }
    }

    return count
}
// @lc code=end

console.log(countRangeSum([-2, 5, -1], -2, 2))
