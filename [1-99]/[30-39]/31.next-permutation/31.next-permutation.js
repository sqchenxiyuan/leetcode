/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 *
 * https://leetcode.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (30.12%)
 * Total Accepted:    225K
 * Total Submissions: 744.1K
 * Testcase Example:  '[1,2,3]'
 *
 * Implement next permutation, which rearranges numbers into the
 * lexicographically next greater permutation of numbers.
 * 
 * If such arrangement is not possible, it must rearrange it as the lowest
 * possible order (ie, sorted in ascending order).
 * 
 * The replacement must be in-place and use only constant extra memory.
 * 
 * Here are some examples. Inputs are in the left-hand column and its
 * corresponding outputs are in the right-hand column.
 * 
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nextPermutation = function(nums) {
    //寻找拐点
    let l = nums.length
    let i = l - 1
    for (; i >= 1; i--){
        if (nums[i - 1] < nums[i]){
            break
        }
    }

    if (i === 0){
        nums.reverse()
    } else {
        let next = i
        let min = nums[i - 1]
        for (let j = i; j < l; j++){
            if (nums[j] < nums[next] && nums[j] > min){
                next = j
            }
        }
        
        [nums[next], nums[i - 1]] = [nums[i - 1], nums[next]]
        let arr = nums.splice(i)
        arr.sort((a, b) => a - b).forEach(num => {
            nums.push(num)
        })
    }

    // console.log(nums)
}

// console.log(nextPermutation([3, 2, 1]))
// console.log(nextPermutation([1, 2, 3]))
// console.log(nextPermutation([1, 1, 5]))
// console.log(nextPermutation([1, 3, 2]))

