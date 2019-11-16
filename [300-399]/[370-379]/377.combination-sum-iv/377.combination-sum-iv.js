/*
 * @lc app=leetcode id=377 lang=javascript
 *
 * [377] Combination Sum IV
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let combinationSum4 = function(nums, target) {
    nums.sort((a, b) => a - b)
    let arr = new Array(target + 1).fill(0)

    nums.forEach(num => arr[num] = 1)

    for (let i = 0; i <= target; i++){
        if (arr[i] > 0){
            nums.forEach(num => arr[num + i] += arr[i])
        }
    }

    return arr[target]
}
// @lc code=end

// console.log(combinationSum4([3, 33, 333], 10000))
// console.log(combinationSum4([1, 2, 3], 4))
// console.log(combinationSum4([1, 2, 3, 6, 9, 10], 32))
