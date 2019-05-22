/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
let search = function(nums, target) {
    if (nums.length === 0) return false

    let i = 0; j = nums.length - 1
    while (i <= j){
        let mid = parseInt((i + j) / 2)
        if (target < nums[mid]){
            if (nums[mid] < nums[j]){ //在右边
                j = mid - 1
            } else if (nums[mid] === nums[j]){ //无法判断
                j--
            } else { //在左边
                if (target < nums[i]){
                    i = mid + 1
                } else {
                    j = mid - 1
                }
            }
        } else if (target > nums[mid]){
            if (nums[mid] > nums[i]){ //在左边
                i = mid + 1
            } else if (nums[mid] === nums[i]){ //无法判断
                i++
            } else { //在右边
                if (target > nums[j]){
                    j = mid - 1
                } else {
                    i = mid + 1
                }
            }
        } else {
            return true
        }
    }
    
    return false
}

// console.log(search([2, 5, 6, 0, 0, 1, 2], 0))
// console.log(search([2, 5, 6, 0, 0, 1, 2], 3))
// console.log(search([1], 0))
// console.log(search([1, 3], 1))
// console.log(search([2, 2, 2, 0, 2, 2], 0))
