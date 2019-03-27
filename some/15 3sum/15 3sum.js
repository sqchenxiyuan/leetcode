///////////////////简化版
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    let out = []

    for(let i = 0; i < nums.length; i++){
        let target = -nums[i]
        let start = i + 1
        let end = nums.length - 1
        while(start < end){
            let sum = nums[start] + nums[end]
            if(sum > target){
                end--
            }else if(sum < target){
                start++
            }else {
                out.push([nums[i], nums[start], nums[end]])
                end--
                while(nums[end] === nums[end+1]){
                    end--
                }
                while(nums[start] === nums[start-1]){
                    start++
                }
            }
        }
        while(nums[i+1] === nums[i]){
            i++
        }
    }

    return out
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0]))
// console.log(threeSum([1,-1,-1,0]))
// console.log(threeSum([-2,0,1,1,2]))
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))