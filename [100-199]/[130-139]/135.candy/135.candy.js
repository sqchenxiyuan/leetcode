/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 */
/**
 * @param {number[]} ratings
 * @return {number}
 */
let candy = function(ratings) {
    let sum = 1 //第一个初始化为1
    let pre = 1 //前一个为1
    let downnum = 0 //连续下降
    let before = 0 //连续下降的开头的值
    for (let i = 1; i < ratings.length; i++){
        if (ratings[i] < ratings[i - 1]){ //小于需要减一
            if (downnum === 0){
                before = pre
                pre = 1
            }
            sum += pre
            sum += downnum
            downnum++
            if (downnum >= before){
                sum++
            }
        } else {
            downnum = 0
        }
        
        if (ratings[i] === ratings[i - 1]){ //相等设为1
            pre = 1
            sum += pre
        }
        
        if (ratings[i] > ratings[i - 1]){ //大于加1
            pre++
            sum += pre
        }
    }
    return sum
}

// let candy = function(ratings) {
//     let left = []
//     let right = []

//     left[0] = 1
//     for (let i = 1; i < ratings.length; i++){
//         if (ratings[i] > ratings[i - 1]){
//             left[i] = left[i - 1] + 1
//         } else {
//             left[i] = 1
//         }
//     }

//     right[ratings.length - 1] = 1
//     for (let i = ratings.length - 1; i >= 0; i--){
//         if (ratings[i] > ratings[i + 1]){
//             right[i] = right[i + 1] + 1
//         } else {
//             right[i] = 1
//         }
//     }

//     let sum = 0
//     for (let i = 0; i < ratings.length; i++){
//         sum += Math.max(left[i], right[i])
//     }
//     return sum
// }

