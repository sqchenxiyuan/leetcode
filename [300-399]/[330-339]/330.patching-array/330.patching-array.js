/*
 * @lc app=leetcode id=330 lang=javascript
 *
 * [330] Patching Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
let minPatches = function(nums, n) {
    if (n === 0) return 0
    let miss = 1 //[0,miss) 目前可以表示的范围,需要补上的数据
    let i = 0
    let need = 0
    while (miss <= n){
        if (i < nums.length && nums[i] <= miss){
            miss += nums[i++]
        } else {
            miss += miss
            need++
        }
    }
    return need
}
// @lc code=end

// console.log(minPatches([1, 3], 6))
// console.log(minPatches([1, 5, 10], 20))
// console.log(minPatches([1, 2, 2], 5))
