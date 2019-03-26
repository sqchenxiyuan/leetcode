/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 *
 * https://leetcode.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (16.13%)
 * Total Accepted:    185.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '10\n3'
 *
 * Given two integers dividend and divisor, divide two integers without using
 * multiplication, division and mod operator.
 * 
 * Return the quotient after dividing dividend by divisor.
 * 
 * The integer division should truncate toward zero.
 * 
 * Example 1:
 * 
 * 
 * Input: dividend = 10, divisor = 3
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: dividend = 7, divisor = -3
 * Output: -2
 * 
 * Note:
 * 
 * 
 * Both dividend and divisor will be 32-bit signed integers.
 * The divisor will never be 0.
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 2^31 − 1 when the
 * division result overflows.
 * 
 * 
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let divide = function(dividend, divisor) {
    let negative = false //是否为负数
    
    if (dividend < 0) {
        dividend = -dividend
        negative = !negative
    }

    if (divisor < 0) {
        divisor = -divisor
        negative = !negative
    }

    let sumarr = [{
        sum: 0,
        num2: 0
    }, {
        sum: divisor,
        num2: 1
    }]
    for (let i = 2;;i++){
        let last = sumarr[i - 1] 
        let obj = {
            sum: last.sum + last.sum,
            num2: last.num2 + last.num2
        }
        if (obj.sum > dividend){
            break
        } else {
            sumarr.push(obj)
        }
    }

    let residue = dividend
    let number = 0
    for (let i = sumarr.length - 1; i > 0; i--){
        let obj = sumarr[i]
        if (residue >= obj.sum){
            number = number + obj.num2
            residue = residue - obj.sum
        }
    }
    if (negative) number = -number

    if (number < -Math.pow(2, 31) || number > Math.pow(2, 31) - 1){
        return Math.pow(2, 31) - 1
    }
    
    return number
}
