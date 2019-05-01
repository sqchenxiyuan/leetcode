/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function(nums) {
    let canArived = 0
    for (let i = 0; i < nums.length; i++){
        if (i > canArived) break //到不了

        let num = nums[i]
        canArived = Math.max(canArived, i + num)

        if (canArived >= nums.length - 1) return true
    }

    return false
}

// console.log(canJump([2, 3, 1, 1, 4]))
// console.log(canJump([3, 2, 1, 0, 4]))
