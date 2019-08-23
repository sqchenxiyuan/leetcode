/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
let summaryRanges = function(nums) {
    //二分查找
    let result = []

    for (let i = 0; i < nums.length;){
        let startNum = nums[i]
        let start = i
        let end = nums.length - 1

        while (start < end){
            let mid = parseInt((end + start) / 2)
            let midNum = nums[mid]
            let targetNum = nums[start] + mid - start
            if (midNum > targetNum){
                end = mid - 1
            } else { //只能等于
                if (nums[mid + 1] == null || nums[mid + 1] - midNum > 1){
                    start = mid
                    break
                } else {
                    start = mid + 1
                }
            }
        }

        if (i === start){
            result.push("" + nums[i])
            i++
        } else {
            result.push(nums[i] + "->" + nums[start])
            i = start + 1
        }
    }

    return result
}

// let x1 = summaryRanges([0, 1, 2, 4, 5, 7])
// let x2 = summaryRanges([0, 2, 3, 4, 6, 8, 9])
// let x3 = summaryRanges([0, 1, 3, 4, 5, 6])
// console.log(123)
