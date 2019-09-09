/*
 * @lc app=leetcode id=260 lang=javascript
 *
 * [260] Single Number III
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let singleNumber = function(nums) {
    let oneset = new Set()
    let moreset = new Set()
    for (let i = 0; i < nums.length; i++){
        let num = nums[i]
        if (moreset.has(num)) continue
        if (oneset.has(num)){
            moreset.add(num)
            oneset.delete(num)
        } else {
            oneset.add(num)
        }
    }

    let result = [...oneset]
    return result
}

