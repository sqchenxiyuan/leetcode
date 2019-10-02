/*
 * @lc app=leetcode id=307 lang=javascript
 *
 * [307] Range Sum Query - Mutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
let NumArray = function(nums) {
    let cache = []
    let sum = 0
    for (let i = 0; i <= nums.length; i++){
        sum += nums[i]
        cache[i] = sum
    }
    this.nums = nums
    this.cache = cache
}

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
//可以缓存变动最后才更新
NumArray.prototype.update = function(index, val) {
    let cache = this.cache
    let nums = this.nums
    let pre = nums[index]
    nums[index] = val
    let diff = val - pre
    for (let i = index; i <= nums.length; i++){
        cache[i] = cache[i] + diff
    }
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
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
// @lc code=end

