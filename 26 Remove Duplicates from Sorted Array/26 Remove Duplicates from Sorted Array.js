/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    let length = nums.length
    if (length === 0) return 0

    let count = 0
    for (let i = 0; i < length; i++){
        if (nums[i] !== nums[count]){
            nums[++count] = nums[i]
        }
    }
    return count + 1
}