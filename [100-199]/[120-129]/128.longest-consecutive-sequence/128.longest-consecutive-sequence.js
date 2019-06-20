/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let longestConsecutive = function(nums) {
    let set = new Set(nums)
    let max = 0

    for (let i = 0; i < nums.length; i++){
        let num = nums[i]
        if (!set.has(num)) continue
        set.delete(num)

        let l = 1
        let left = num - 1
        while (set.has(left)){
            set.delete(left)
            l++
            left--
        }

        let right = num + 1
        while (set.has(right)){
            set.delete(right)
            l++
            right++
        }

        max = Math.max(max, l)
    }

    return max

}

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

