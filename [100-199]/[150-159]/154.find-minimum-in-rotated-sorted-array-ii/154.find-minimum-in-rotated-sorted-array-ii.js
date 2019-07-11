/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let findMin = function(nums) {
    if (nums[0] < nums[nums.length - 1]) return nums[0]
    let i = 0
    let j = nums.length - 1
    while (i < j && nums[i] >= nums[j]){
        let left = nums[i]
        let right = nums[j]
        
        let mid = parseInt((i + j) / 2)
        let midNum = nums[mid]

        if (midNum > left){
            if (nums[mid] > nums[mid + 1]) return nums[mid + 1]
            i = mid + 1
        } else if (midNum === left){
            i++
        } else if (midNum < right){
            if (nums[mid] < nums[mid - 1]) return nums[mid]
            j = mid - 1
        } else if (midNum === right){
            j--
        }
    }
    return nums[i]
}

// console.log(findMin([1, 3, 5]))
// console.log(findMin([2, 2, 2, 0, 1]))
// console.log(findMin([2, 2, 2, 0, 2, 2, 2]))
// console.log(findMin([2, 2]))
// console.log(findMin([1]))
// console.log(findMin([1, 2, 1]))
