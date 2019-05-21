/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length
    let i = 0, j = 1
    let count = 1 //i指向的数据的次数
    while (j < nums.length){
        if (nums[j] === nums[i]) count++
        else count = 1

        if (count <= 2){
            nums[++i] = nums[j]
        }
        j++
    }
    
    return i + 1
}

// console.log(removeDuplicates([1, 1, 1, 2, 2, 3]))
// console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))
