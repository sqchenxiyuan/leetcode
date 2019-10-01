/*
 * @lc app=leetcode id=306 lang=javascript
 *
 * [306] Additive Number
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
//由于是相加 最后的位数一定大于等于前面的位数
//存在递归的效果
let isAdditiveNumber = function(num) {
    let len = num.length
    
    function isValid(x1, x2, j){
        if (j === len) {
            return true
        }
        let x3 = x1 + x2
        let x3String = x3.toString()
        if (num[j] === "0" && x3String.length > 1) return false

        let r = num.slice(j).match(x3String)
        if (r && r.index === 0){
            return isValid(x2, x3, j + x3String.length)
        }
        return false
    }
    
    for (let i = 1; i <= num.length / 2; i++){
        if (num[0] === "0" && i > 1) break
        let x1 = parseInt(num.slice(0, i))
        for (let j = 1; j <= len - i - j; j++){
            if (num[i] === "0" && j > 1) break
            let x2 = parseInt(num.slice(i, i + j))
            if (isValid(x1, x2, i + j)) return true
        }
    }

    return false
}
// @lc code=end

// console.log(isAdditiveNumber("112358"))
// console.log(isAdditiveNumber("199100199"))
// console.log(isAdditiveNumber("1991001991"))
// console.log(isAdditiveNumber("199101991"))
// console.log(isAdditiveNumber("101"))
// console.log(isAdditiveNumber("000"))
// console.log(isAdditiveNumber("0235813"))