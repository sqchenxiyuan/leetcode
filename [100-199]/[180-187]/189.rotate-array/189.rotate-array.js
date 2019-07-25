/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//通过翻转
// let rotate = function(nums, k) {
//     function reverse(start, end){
//         while (start < end){
//             let t = nums[start]
//             nums[start] = nums[end]
//             nums[end] = t
//             start++
//             end--
//         }
//     }

//     k = k % nums.length
//     reverse(0, nums.length - 1)
//     reverse(0, k - 1)
//     reverse(k, nums.length - 1)
// }

//间隙循环
let rotate = function(nums, k) {
    let len = nums.length
    k = k % len

    let count = 0
    for (let i = 0; count < nums.length; i++){
        let current = i
        let nowValue = nums[i]
        do {
            let next = (current + k) % len
            let t = nums[next]
            nums[next] = nowValue
            nowValue = t
            current = next
            count++
        } while (current !== i)
    }
}

