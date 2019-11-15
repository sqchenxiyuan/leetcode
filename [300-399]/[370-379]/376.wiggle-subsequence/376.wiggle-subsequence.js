/*
 * @lc app=leetcode id=376 lang=javascript
 *
 * [376] Wiggle Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
let wiggleMaxLength = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return 1

    let i = 0
    while (nums[i] === nums[i + 1]) i++
    i++
    let len = 1
    let now = nums[i]
    let dirct = nums[i] > nums[i - 1] ? 1 : -1 //方向
    i++

    if (i < nums.length){
        len++
        for (;i < nums.length; i++){
            if (nums[i] >= now && dirct === 1
                || nums[i] <= now && dirct === -1){
                now = nums[i]
            } else if (nums[i] < now && dirct === 1) {
                len++
                dirct = -1
            } else {
                len++
                dirct = 1
            }
            now = nums[i]
        }
    }

    return len
}
// @lc code=end


// console.log(wiggleMaxLength([0, 0]))
// console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))
// console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))
// console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]))

