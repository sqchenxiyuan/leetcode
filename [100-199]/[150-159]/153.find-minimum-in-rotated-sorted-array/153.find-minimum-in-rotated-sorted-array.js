/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let findMin = function(nums) {
    if (nums[0] <= nums[nums.length - 1]) return nums[0]
    let i = 0
    let j = nums.length - 1
    while (i < j){
        let midI = parseInt((i + j) / 2)
        let left = nums[i]
        let right = nums[j]
        let mid = nums[midI]

        if (mid >= left){
            if (nums[midI] > nums[midI + 1]) return nums[midI + 1]
            i = midI + 1
        } else {
            if (nums[midI] < nums[midI - 1]) return nums[midI]
            j = midI - 1
        }
    }
    return nums[i]
}

// console.log(findMin([2, 1]))
// console.log(findMin([3, 1, 2]))

