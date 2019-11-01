/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function(nums1, nums2) {
    let map = {}
    let arr = []

    nums1.forEach(num => {
        if (!map[num])map[num] = 1
        else map[num]++
    })

    nums2.forEach(num => {
        if (map[num]){
            map[num]--
            arr.push(num)
        }
    })

    return arr
}
// @lc code=end

