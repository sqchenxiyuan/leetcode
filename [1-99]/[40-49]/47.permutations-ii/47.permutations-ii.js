/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 *
 * https://leetcode.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (39.61%)
 * Total Accepted:    234.9K
 * Total Submissions: 587.4K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a collection of numbers that might contain duplicates, return all
 * possible unique permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,1,2]
 * Output:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permuteUnique = function(nums) {
    let set = new Set()
    nums.forEach((_, i) => set.add(i))
    
    let map = {}
    let result = []
    function build(arr){
        if (set.size === 0) {
            if (map[arr.join("")]) return
            map[arr.join("")] = true
            result.push(arr)
            return
        }
        let data = [...set]
        data.forEach(i => {
            set.delete(i)
            build([...arr, nums[i]])
            set.add(i)
        })
    }
    build([])
    return result
}


let x = permuteUnique([1, 1, 2])
console.log(x)
