/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
//数组
let findDuplicate = function(nums) {
    let arr = new Array(nums.length + 1).fill(false)
    for (let i = 0; i < nums.length; i++){
        if (arr[nums[i]]) return nums[i]
        arr[nums[i]] = true
    }
}

//循环，可以将其当成有环链表
// let findDuplicate = function(nums) {
//     let a = nums[0]
//     let b = nums[0]

//     //先让进环
//     do {
//         a = nums[a]
//         b = nums[nums[b]]
//     } while (a != b)

//     //从外部一步步进入，找到入口点
//     let p1 = nums[0]
//     let p2 = a
//     while (p1 != p2) {
//         p1 = nums[p1]
//         p2 = nums[p2]
//     } 

//     return p1
// }

// console.log(findDuplicate([1, 3, 4, 2, 2]))