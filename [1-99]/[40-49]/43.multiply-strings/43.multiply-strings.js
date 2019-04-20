/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (30.19%)
 * Total Accepted:    193.8K
 * Total Submissions: 638.4K
 * Testcase Example:  '"2"\n"3"'
 *
 * Given two non-negative integers num1 and num2 represented as strings, return
 * the product of num1 and num2, also represented as a string.
 * 
 * Example 1:
 * 
 * 
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * 
 * Example 2:
 * 
 * 
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 * 
 * 
 * Note:
 * 
 * 
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contain only digits 0-9.
 * Both num1 and num2 do not contain any leading zero, except the number 0
 * itself.
 * You must not use any built-in BigInteger library or convert the inputs to
 * integer directly.
 * 
 * 
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let multiply = function(num1, num2) {
    let arr1 = Array.from(num1).map(_ => parseInt(_))
    let arr2 = Array.from(num2).map(_ => parseInt(_))
    arr1.reverse()
    arr2.reverse()

    let result = new Array(num1.length + num2.length + 2).fill(0)
    for (let i = 0; i < arr1.length; i++){
        let x = arr1[i]
        for (let j = 0; j < arr2.length; j++){
            let y = arr2[j]
            result[i + j] += x * y
        }
    }

    for (let i = 0; result[i] != undefined; i++){
        let x = result[i] % 10
        let y = parseInt(result[i] / 10)
        if (y > 0){
            result[i] = x
            result[i + 1] += y
        }
    }

    while (result[result.length - 1] === 0 && result.length > 1){
        result.pop()
    }

    return result.reverse().join("")
}

// console.log(multiply("123", "123")) //15129
// console.log(multiply("0", "31231")) //0
// console.log(multiply("123", "456")) //56088
// console.log(multiply("140", "721")) //100940

