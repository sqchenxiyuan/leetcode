/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
    let l = nums.length
    let ld2 = nums.length / 2
    let map = {}
    for (let i = 0; i < l; i++){
        let num = nums[i]
        if (!map[num])map[num] = 0
        map[num]++
        if (map[num] > ld2){
            return num
        }
    }
}

// console.log(majorityElement([3, 2, 3]))
// console.log(majorityElement([3]))
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))

