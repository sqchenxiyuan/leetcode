/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersection = function(nums1, nums2) {
    let set = new Set()
    let set2 = new Set()
    let arr = []
    nums1.forEach(num => {
        set.add(num)
    })

    nums2.forEach(num => {
        if (set.has(num) && !set2.has(num)){
            set2.add(num)
            arr.push(num)
        }
    })

    return arr
}
// @lc code=end

console.log(intersection([1, 2, 2, 1], [2, 2]))