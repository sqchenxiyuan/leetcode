/*
 * @lc app=leetcode id=324 lang=javascript
 *
 * [324] Wiggle Sort II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//原始算法 O(nlogn)+O(n)
// let wiggleSort = function(nums) {
    
//     nums.sort((a, b) => a - b)
//     let len = nums.length
//     let mid = nums[parseInt(len / 2)]

//     let arr = new Array(len).fill(mid)
//     //从左往右放大于中位数的
//     let k = 1
//     for (let i = len - 1; nums[i] > mid; i--, k = k + 2){
//         arr[k] = nums[i]
//     }
    
//     //从右往左放小于中位数的
//     k = len % 2 === 0 ? len - 2 : len - 1
//     for (let i = 0; nums[i] < mid; i++, k = k - 2){
//         arr[k] = nums[i]
//     }

//     nums.splice(0, len, ...arr)

//     // console.log(nums.join())
// }

//优化算法
let wiggleSort = function(nums) {

    //获取start,end的第N大的数,可以找到中位数,并且把大于的放右边，小于的放左边
    function nthNumber(nums, start, end, nth){
        let midIndex = parseInt((start + end) / 2)
        let mid = nums[midIndex]

        let i = start, j = end //左右空位
        for (let k = i; k <= j; k++){
            if (nums[k] > mid){
                [nums[i], nums[k]] = [nums[k], nums[i]]
                i++
            } else if (nums[k] < mid){
                [nums[j], nums[k]] = [nums[k], nums[j]]
                j--
                k--
            }
        }
        if (i - start > nth){
            return nthNumber(nums, start, i - 1, nth)
        } else if (j - start + 1 > nth){
            return mid
        } else {
            return nthNumber(nums, j + 1, end, nth - (j - start + 1))
        }
    }
    let len = nums.length
    let mid = nthNumber(nums, 0, len - 1, parseInt(len / 2))

    function getIndex(i){
        return (1 + i * 2) % (len | 1)
    }

    function swap(i, j){
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    let i = 0, j = 0, k = len - 1
    while (j <= k) {
        if (nums[getIndex(j)] > mid)
            swap(getIndex(i++), getIndex(j++))
        else if (nums[getIndex(j)] < mid)
            swap(getIndex(j), getIndex(k--))
        else
            j++
    }

    // console.log(nums)
}

// @lc code=end

// console.log(wiggleSort([1, 5, 1, 1, 6, 4]))
// console.log(wiggleSort([1, 5, 1, 1, 6]))
// console.log(wiggleSort([4, 5, 5, 6]))
// console.log(wiggleSort([5, 3, 1, 2, 6, 7, 8, 5, 5]))

