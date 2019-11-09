/*
 * @lc app=leetcode id=368 lang=javascript
 *
 * [368] Largest Divisible Subset
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let largestDivisibleSubset = function(nums) {
    if (nums.length === 0) return []

    nums.sort((a, b) => a - b)
    let cache = new Array(nums.length).fill(1)

    let current = {
        data: 0,
        len: 0,
        parent: null
    }

    for (let i = 0; i < nums.length; i++){
        let cur = {
            data: nums[i],
            len: 1,
            parent: null
        }
        
        for (let j = i - 1; j >= 0; j--){
            if (nums[i] % nums[j] === 0 && cache[j].len + 1 > cur.len){
                cur.len = cache[j].len + 1,
                cur.parent = cache[j]
            }
        }

        cache[i] = cur

        if (cur.len > current.len){
            current = cur
        }
    }

    let result = []
    while (current){
        result.push(current.data)
        current = current.parent
    }
    result.reverse()

    return result
}
// @lc code=end


// let x1 = largestDivisibleSubset([1, 2, 3])
// let x2 = largestDivisibleSubset([1, 2, 4, 8])
// console.log(123)