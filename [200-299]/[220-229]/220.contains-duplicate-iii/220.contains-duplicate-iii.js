/*
 * @lc app=leetcode id=220 lang=javascript
 *
 * [220] Contains Duplicate III
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
let containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (k < 0 || t < 0) return false
    let map = {}
    for (let i = 0; i < nums.length; i++){
        let num = nums[i]
        let bucktNum = Math.floor(num / (t + 1))
        if (map[bucktNum] != null
            || map[bucktNum - 1] != null && Math.abs(map[bucktNum - 1] - num) <= t
            || map[bucktNum + 1] != null && Math.abs(map[bucktNum + 1] - num) <= t
        ){
            return true
        } else {
            map[bucktNum] = num
        }

        if (i >= k){
            map[Math.floor(nums[i - k] / (t + 1))] = null
        }
    }
    return false
}

// console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))
// console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2))
// console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3))

