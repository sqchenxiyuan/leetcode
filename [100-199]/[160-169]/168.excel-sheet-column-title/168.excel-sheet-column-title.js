/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */
/**
 * @param {number} n
 * @return {string}
 */
let convertToTitle = function(n) {
    let arr = []
    while (n > 0){
        n-- //如果是1-27可以刚好满足， 把每一次进位多计算的一个去掉
        arr.push(n % 26 + 65)
        n = parseInt(n / 26)
    }
    arr = arr.reverse()
    return String.fromCharCode(...arr)
}
// console.log(convertToTitle(1))
// console.log(convertToTitle(26))
// console.log(convertToTitle(27))
// console.log(convertToTitle(28))
// console.log(convertToTitle(701))

