/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let maxSlidingWindow = function(nums, k) {
    let indexStack = []
    let result = []
    for (let i = 0; i < nums.length; i++){
        while (indexStack.length > 0 
            && indexStack[0] < i - k + 1) indexStack.shift()
        while (indexStack.length > 0 
            && nums[i] > nums[indexStack[indexStack.length - 1]]) indexStack.pop()
        indexStack.push(i)
        if (i - k + 1 >= 0){
            result.push(nums[indexStack[0]])
        }
    }

    return result
}

// let x1 = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
// let x2 = maxSlidingWindow([7, 2, 4], 2)
// console.log(123)
