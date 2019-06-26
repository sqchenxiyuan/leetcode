/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
    let one = 0
    let tow = 0
    let three = 0

    for (let i = 0; i < nums.length; i++){
        let num = nums[i]
        // let num = Math.abs(nums[i])
        let t3 = (tow & (one ^ num)) // 当某一位记录了两次，再次变化时
        three = three ^ t3//加了三次了 1,0->1
        tow = tow ^ (one & num & ~tow) //都是1表示加了两次了
        tow = tow ^ t3
        one = one ^ num //更新one 最后one是所有值的和
        one = one ^ t3
    }
    // one = one ^ three
    return one
}

// console.log(singleNumber([2, 2, 3, 2])) //3
// console.log(singleNumber([0, 1, 0, 1, 0, 1, 99])) //99
// console.log(singleNumber([-2, -2, 1, 1, 1, -4, -2])) // -4
// console.log(singleNumber([2, 2, 1, 1, 1, 4, 2])) // 4
// console.log(singleNumber([-2, -2, 1, 1, -3, 1, -3, -3, -4, -2]))
