/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(numbers, target) {
    let i = 0
    let j = numbers.length - 1
    while (i < j){
        let sum = numbers[i] + numbers[j]
        if (sum > target){
            j--
        } else if (sum < target) {
            i++
        } else {
            return [i + 1, j + 1]
        }
    }
}

// console.log(twoSum([2, 7, 11, 15], 9))

