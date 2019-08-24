/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let majorityElement = function(nums) {
    let a = -1
    let b = -1
    let counta = 0
    let countb = 0

    for (let i = 0; i < nums.length; i++){
        let num = nums[i]
        if (num === a) counta++
        else if (num === b) countb++
        else if (counta === 0) a = num, counta++
        else if (countb === 0) b = num, countb++
        else counta--, countb--
    }

    counta = 0, countb = 0
    for (let i = 0; i < nums.length; i++){
        let num = nums[i]
        if (num === a) counta++
        if (num === b) countb++
    }

    let result = []
    if (counta > nums.length / 3) result.push(a)
    if (countb > nums.length / 3) result.push(b)

    return result
}

// console.log(majorityElement([3, 2, 3]))
// console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]))

