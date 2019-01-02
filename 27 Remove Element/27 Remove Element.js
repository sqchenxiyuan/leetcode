/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function(nums, val) {
    let length = nums.length
    let index = 0
    for (let i = 0; i < length; i++){
        if (nums[i] !== val){
            nums[index] = nums[i]
            index++
        }
    }
    return index
}

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))