/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let topKFrequent = function(nums, k) {
    let map = new Map()
    nums.forEach(num => {
        if (map.has(num)){
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    })

    let arr = []
    map.forEach((val, key) => {
        arr.push({
            num: key,
            count: val
        })
    })

    arr.sort((a, b) => b.count - a.count)

    return arr.slice(0, k).map(_ => _.num)
}
// @lc code=end

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
// console.log(topKFrequent([1], 1))