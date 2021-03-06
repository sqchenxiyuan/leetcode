/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let rob = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    
    function robMax(nums){
        if (nums.length === 0) return 0
        if (nums.length === 1) return nums[0]
        
        let g = [] //对0-i的范围进行抢劫的最大值
        g[0] = nums[0]
        g[1] = Math.max(nums[0], nums[1])
        for (let i = 2; i < nums.length; i++){
            g[i] = Math.max(nums[i] + g[i - 2], g[i - 1])
        }

        return g[nums.length - 1]
    }

    return Math.max(robMax(nums.slice(0, -1)), robMax(nums.slice(1)))
}

// console.log(rob([2, 3, 2]))
// console.log(rob([1, 2, 3, 1]))

