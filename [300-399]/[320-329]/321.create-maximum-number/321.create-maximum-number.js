/*
 * @lc app=leetcode id=321 lang=javascript
 *
 * [321] Create Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
//选取范围内的最高值
let maxNumber = function(nums1, nums2, k) {
    let l1 = nums1.length
    let l2 = nums2.length

    let max = []

    function getMaxKNumber(nums, k){
        let result = []
        let drop = nums.length - k
        for (let i = 0; i < nums.length; i++){
            while (drop > 0 && result.length > 0 && result[result.length - 1] < nums[i]){
                result.pop()
                drop--
            }
            result.push(nums[i])
        }
        return result.slice(0, k)
    }

    function getTheMax(num1, num2){
        for (let i = 0; i < num1.length || i < num2.length; i++){
            let n1 = num1[i] != null ? num1[i] : -1
            let n2 = num2[i] != null ? num2[i] : -1
            if (n1 === n2) continue
            if (n1 < n2){
                return num2
            } else {
                return num1
            }
        }
        return num1
    }

    function mergeNumber(num1, num2){
        num1 = num1.slice()
        num2 = num2.slice()
        let result = []
        while (num1.length > 0 || num2.length > 0){
            if (getTheMax(num1, num2) === num1){
                result.push(num1.shift())
            } else {
                result.push(num2.shift())
            }
        }
        return result
    }

    for (let i = 0; i <= k; i++){
        let n = i //第一个数组取n个
        let m = k - i //第二个数组取m个
        if (n < 0 || n > l1) continue
        if (m < 0 || m > l2) continue
        let n1 = getMaxKNumber(nums1, n)
        let n2 = getMaxKNumber(nums2, m)
        // console.log(n, m)
        // console.log(n1, n2)
        // console.log(mergeNumber(n1, n2))
        // console.log("====")
        max = getTheMax(max, mergeNumber(n1, n2))
    }

    return max
}
// @lc code=end

// console.log(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5))
// console.log(maxNumber([6, 7], [6, 0, 4], 5))
// console.log(maxNumber([3, 9], [8, 9], 3))
// console.log(maxNumber([1, 2], [], 2))
// console.log(maxNumber([5, 6, 8], [6, 4, 0], 3))

