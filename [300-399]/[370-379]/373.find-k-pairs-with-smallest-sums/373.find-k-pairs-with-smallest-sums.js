/*
 * @lc app=leetcode id=373 lang=javascript
 *
 * [373] Find K Pairs with Smallest Sums
 */

// @lc code=start
function Heap(cmp = (a, b) => a - b){
    this.arr = [-1]
    this.cmp = cmp
}

Heap.prototype.push = function(num){
    let arr = this.arr
    arr.push(num)
    let p = arr.length - 1

    while (p > 1){
        let up = parseInt(p / 2)
        if (this.cmp(arr[p], arr[up]) < 0){
            [arr[p], arr[up]] = [arr[up], arr[p]]
            p = up
        } else {
            break
        }
    }
}

Heap.prototype.pop = function(num){
    let arr = this.arr
    let result = arr[1]
    let bignum = arr[arr.length - 1]
    arr[1] = bignum
    arr.length = arr.length - 1
    let p = 1

    //下沉
    while (p * 2 < arr.length){
        //选出最适合的
        let target
        if (p * 2 + 1 < arr.length){
            if (this.cmp(arr[p * 2], arr[p * 2 + 1]) < 0){
                target = p * 2
            } else {
                target = p * 2 + 1
            } 
        } else {
            target = p * 2
        }

        if (this.cmp(arr[target], arr[p]) < 0){
            [arr[p], arr[target]] = [arr[target], arr[p]]
            p = target
        } else {
            break
        }
    }

    return result
}

// let h = new Heap((a, b) => b - a)
// h.push(1)
// h.push(9)
// h.push(2)
// h.push(3)
// h.push(4)
// h.push(2)
// h.push(7)
// h.push(9)
// h.push(1)

// console.log(h.pop())
// console.log(h.pop())
// console.log(h.pop())

// console.log(123)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
let kSmallestPairs = function(nums1, nums2, k) {
    let heap = new Heap((a, b) => {
        return nums1[a[0]] + nums2[a[1]] - (nums1[b[0]] + nums2[b[1]])
    })

    let l1 = nums1.length
    let l2 = nums2.length

    heap.push([0, 0])
    let result = []
    let map = new Array(l1).fill(0).map(_ => new Array(l2).fill(false))
    while (k > 0 && result.length < l1 * l2){
        let [x1, x2] = heap.pop()
        result.push([nums1[x1], nums2[x2]])
        if (x1 < l1 - 1 && !map[x1 + 1][x2]){
            heap.push([x1 + 1, x2])
            map[x1 + 1][x2] = true
        }
        if (x2 < l2 - 1 && !map[x1][x2 + 1]){
            heap.push([x1, x2 + 1])
            map[x1][x2 + 1] = true
        }
        k--
    }

    return result
}
// @lc code=end

// console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 100))
// console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2))
// console.log(kSmallestPairs([1, 2], [3], 3))
