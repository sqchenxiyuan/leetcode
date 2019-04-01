/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (25.73%)
 * Total Accepted:    403.3K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * Example 2:
 * 
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(arr1, arr2) {
    let length1 = arr1.length,
        length2 = arr2.length,
        length = length1 + length2,
        a = 0,
        b = 0,
        x1, //需要加的第一个位置
        x2 //需要加的第二个位置

    arr1.push(Infinity)
    arr2.push(Infinity)

    if (length % 2 === 0){
        x1 = length / 2
        x2 = x1 + 1
    } else {
        x1 = Math.floor(length / 2) + 1
        x2 = x1
    }
    x1--
    x2--

    for (let i = 0; i < length && (i <= x1 || i <= x2); i++){
        let min

        if (arr1[0] < arr2[0]){
            min = arr1.shift()
        } else {
            min = arr2.shift()
        }

        if (i === x1){
            a = min
        }

        if (i === x2){
            b = min
        }
    }

    return (a + b) / 2
}

