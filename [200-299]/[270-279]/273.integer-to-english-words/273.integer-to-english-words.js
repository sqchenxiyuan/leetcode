/*
 * @lc app=leetcode id=273 lang=javascript
 *
 * [273] Integer to English Words
 */

let less20 = [
    "",
    "One", 
    "Two", 
    "Three", 
    "Four", 
    "Five", 
    "Six", 
    "Seven", 
    "Eight", 
    "Nine", 
    "Ten", 
    "Eleven", 
    "Twelve", 
    "Thirteen", 
    "Fourteen", 
    "Fifteen", 
    "Sixteen", 
    "Seventeen", 
    "Eighteen", 
    "Nineteen"
]

let tens = [
    "",
    "Ten", 
    "Twenty", 
    "Thirty", 
    "Forty", 
    "Fifty", 
    "Sixty", 
    "Seventy", 
    "Eighty", 
    "Ninety"
]
let thousands = [
    "",
    "Thousand", 
    "Million", 
    "Billion"
]

/**
 * @param {number} num
 * @return {string}
 */
let numberToWords = function(num) {
    if (num == 0) return "Zero"
    
    function inOneThousand(num){
        let arr = []
        let lessHundred = num % 100
        let hundred = (num - lessHundred) / 100
        if (less20[hundred]){
            arr.push(less20[hundred])
            arr.push("Hundred")
        }
        arr.push(inOneHundred(lessHundred))
        return arr.filter(_ => _).join(" ")
    }

    function inOneHundred(num){
        if (num < 20) return less20[num]
        let bit = num % 10
        let arr = []
        arr.push(tens[(num - bit) / 10])
        arr.push(less20[bit])
        return arr.filter(_ => _).join(" ")
    }

    let arr = []
    let currentT = 0//当前的千位
    while (num > 0){
        let current = num % 1000
        num = (num - current) / 1000
        if (current > 0){
            arr.push(thousands[currentT])
            arr.push(inOneThousand(current))
        }
        currentT++
    }

    return arr.reverse().filter(_ => _).join(" ")
}

// console.log(numberToWords("123"))
// console.log(numberToWords("12345"))
// console.log(numberToWords("1234567"))
// console.log(numberToWords("1234567891"))
// console.log(numberToWords("40531807"))
