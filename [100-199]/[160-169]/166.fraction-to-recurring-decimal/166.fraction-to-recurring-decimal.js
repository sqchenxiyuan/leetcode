/*
 * @lc app=leetcode id=166 lang=javascript
 *
 * [166] Fraction to Recurring Decimal
 */
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
let fractionToDecimal = function(numerator, denominator) {
    let flag = 1
    if (numerator < 0) {
        numerator *= -1
        flag *= -1
    }

    if (denominator < 0){
        denominator *= -1
        flag *= -1
    }

    let int = Math.floor(numerator / denominator)
    let follow = []
    let result = "" + int
    let nextNum = numerator % denominator
    let numMap = {}
    while (true){
        if (nextNum === 0){ //完成
            if (follow.length > 0){
                result = result + "." + follow.join("")
            }
            break
        } if (numMap[nextNum] >= 0){ //循环
            follow.splice(numMap[nextNum], 0, "(")
            follow.push(")")
            result = result + "." + follow.join("")
            break
        } else {
            numMap[nextNum] = follow.length
            nextNum = nextNum * 10
            let num = Math.floor(nextNum / denominator)
            follow.push(num)
            nextNum = nextNum % denominator
        }
    }

    if (flag === -1){
        if (int === 0 && follow.length === 0){

        } else {
            result = "-" + result
        }
    }

    return result
}

// console.log(fractionToDecimal(1, 2))
// console.log(fractionToDecimal(2, 1))
// console.log(fractionToDecimal(2, 3))
// console.log(fractionToDecimal(1, 7))
// console.log(fractionToDecimal(1, 6))
