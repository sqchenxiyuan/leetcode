/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let containsNearbyDuplicate = function(nums, k) {
    let map = {}
    for (let i = 0; i < k && i < nums.length; i++){
        let num = nums[i]
        if (map[num]) return true
        map[num] = true
    }

    for (let i = k; i < nums.length; i++){
        let num = nums[i]
        if (map[num]) return true
        map[num] = true
        map[nums[i - k]] = false
    }

    return false
}

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 1))
