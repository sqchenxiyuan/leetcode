/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)

    let result = []

    for (let i = 0; i < nums.length; i++){
        if (nums[i] === nums[i - 1]) continue
        
        let sumtarget = target - nums[i]

        for (let j = i + 1; j < nums.length; j++){
            if (j > i + 1 && nums[j] === nums[j - 1]) continue

            let sumtarget2 = sumtarget - nums[j]
            let p = j + 1, q = nums.length - 1
            while (p < q){
                if (nums[p] + nums[q] > sumtarget2){
                    q--
                    while (nums[q] === nums[q + 1]) q--
                } else if (nums[p] + nums[q] < sumtarget2){
                    p++
                    while (nums[p] === nums[p - 1]) p++
                } else {
                    result.push([nums[i], nums[j], nums[p], nums[q]])
                    p++
                    while (nums[p] === nums[p - 1]) p++
                }
            }
        }
    }

    return result
}

// console.log(JSON.stringify(fourSum([1, 0, -1, 0, -2, 2], 0)))
// console.log(JSON.stringify(fourSum([1, 0, -1, 0, -2, 2], 1)))
// console.log(JSON.stringify(fourSum([1, 0, -1, 0, -2, 2], 2)))
// console.log(JSON.stringify(fourSum([1, 1, 0, 0, -1, 0, -1, 0, -2, 2], 2)))