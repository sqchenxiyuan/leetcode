/*
 * @lc app=leetcode id=312 lang=javascript
 *
 * [312] Burst Balloons
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
let maxCoins = function(nums) {
    let n = nums.length
    let cache = new Array(n).fill(0).map(_ => new Array(n))//打[i-j]区间的气球的最大值
    nums[-1] = 1
    nums[n] = 1

    function getMaxCoins(left, right){
        if (left > right) return 0
        if (cache[left][right]) return cache[left][right]
        let result = 0
        if (left === right){
            result = nums[left - 1] * nums[left] * nums[right + 1]
        } else {
            let side = nums[left - 1] * nums[right + 1]
            for (let x = left; x <= right; x++){
                result = Math.max(
                    result, 
                    side * nums[x] 
                    + getMaxCoins(left, x - 1)
                    + getMaxCoins(x + 1, right))
            }
        }
        cache[left][right] = result
        return result
    }

    return getMaxCoins(0, n - 1)
}
// @lc code=end

console.log(maxCoins([3, 1, 5, 8]))
