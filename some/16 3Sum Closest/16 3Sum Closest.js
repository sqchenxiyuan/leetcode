/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let close = Infinity
    let closeSum = 0
    for (let i = 0; i < nums.length - 2; i++){
        let a = nums[i]
        let b = nums[i + 1]
        let c = nums[i + 2]
        
        
        for (let j = i + 1; j < nums.length - 1; j++){
            let b = nums[j]
            let c = nums[j + 1]
            
            for (let q = j + 1; q < nums.length; q++){
                let c = nums[q]
                let sum = a + b + c
                let d = Math.abs(target - sum)
                if (d < close){
                    // console.log(a, b, c, sum)
                    close = d
                    closeSum = sum
                }

                if (target < a + b + c){
                    break
                }
            }

            if (target < a + b + c ){
                break
            }
        }

        if (target < a + b + c ){
            break
        }
    }
    return closeSum
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let close = Infinity
    let closeSum = 0
    for (let i = 0; i < nums.length - 2; i++){
        let a = nums[i]
        
        let p = i + 1, q = nums.length
        while (p < q){
            let b = nums[p]
            let c = nums[q]
            let sum = a + b + c
            let d = Math.abs(target - sum)
            if (d < close){
                close = d
                closeSum = sum
            }

            if (target > sum){
                p++
            } else {
                q--
            }
        }
    }
    return closeSum
}


console.log(threeSumClosest([-1, 2, 1, -4], 1))