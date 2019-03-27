/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.80%)
 * Total Accepted:    365.7K
 * Total Submissions: 895.4K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer.
 * 
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * 
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--){
        let n = digits[i]
        if (n < 9){
            digits[i] = n + 1
            break
        } else {
            digits[i] = 0
            if (i === 0){
                digits.unshift(1)
            }
        }
    }
    return digits
}

// console.log(plusOne([4, 3, 2, 1]))
// console.log(plusOne([4, 3, 2, 9]))
// console.log(plusOne([9, 9]))