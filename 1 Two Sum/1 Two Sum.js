/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let hash = {}
    for(let i = 0; i < nums.length; i++){
        if(hash[target - nums[i]] !== undefined){
            return [hash[target - nums[i]], i]
        }else{
            hash[nums[i]] = i
        }
    }
};

console.log(twoSum([2, 7, 11, 15],9))