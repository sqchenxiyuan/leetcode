/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
let largestNumber = function(nums) {
    let numsArr = nums.map(num => {
        return num + ""
    })

    let result = numsArr.sort((a, b) => {
        return parseInt(b + a) - parseInt(a + b)
    }).join("").replace(/^0+/, "")
    if (result === "") result = "0"

    return result
}

// console.log(largestNumber([3, 30, 34, 5, 9]))
// console.log(largestNumber([3, 30, 34]))
// console.log(largestNumber([10, 2]))
// console.log(largestNumber([12, 121]))
// console.log(largestNumber([12, 1213]))
// console.log(largestNumber([121, 1211]))
// console.log(largestNumber([0, 0]))
// console.log(largestNumber([824, 938, 1399, 5607, 6973, 5703, 9609, 4398, 8247]))

