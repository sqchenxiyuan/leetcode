/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
//O(n)
// let NumArray = function(nums) {
//     this.nums = nums
// }

// /** 
//  * @param {number} i 
//  * @param {number} j
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function(i, j) {
//     let nums = this.nums
//     let sum = 0
//     for (let x = i; x <= j; x++){
//         sum += nums[x]
//     }
//     return sum
// }

//O(1)
let NumArray = function(nums) {
    let cache = []
    let sum = 0
    for (let i = 0; i <= nums.length; i++){
        sum += nums[i]
        cache[i] = sum
    }
    this.cache = cache
}

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.cache[j] - (this.cache[i - 1] || 0)
}

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end

