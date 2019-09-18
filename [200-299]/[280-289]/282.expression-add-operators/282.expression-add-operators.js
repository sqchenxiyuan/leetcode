/*
 * @lc app=leetcode id=282 lang=javascript
 *
 * [282] Expression Add Operators
 */
//一共 4 ^ (n - 1)的可能
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
let addOperators = function(num, target) {
    if (num.length === 0) return []

    let nums = num.split("").map(num => parseInt(num))
    let cache = new Array(num.length).fill(0).map(_ => new Map())
    cache[0].set(nums[0], [num[0]])

    // function buildCurMapWithAddAndSub(cur, pre, currentNum, currentNumStr){
    //     if (pre.size === 0){
    //         if (!cur.has(currentNum))cur.set(currentNum, [])
    //         let arr = cur.get(currentNum)
    //         arr.push(currentNumStr)
    //     } else {
    //         pre.forEach((value, key) => {
    //             //加法
    //             let add = key + currentNum
    //             if (!cur.has(add))cur.set(add, [])
    //             let addArr = cur.get(add)
    //             value.forEach(v => addArr.push(v + "+" + currentNumStr))
    
    //             //减法
    //             let sub = key - currentNum
    //             if (!cur.has(sub))cur.set(sub, [])
    //             let subArr = cur.get(sub)
    //             value.forEach(v => subArr.push(v + "-" + currentNumStr))
    //         })
    //     }
    // }

    //加法组装
    function buildCurMapWithAddAndSub(leftSet, rightSet, targetSet){
        leftSet.forEach((lv, lk) => {
            rightSet.forEach((rv, rk) => {
                let add = lk + rk
                let sub = lk - rk
                let addArr = []
                let subArr = []
                lv.forEach(lvv => {
                    rv.forEach(rvv => {
                        addArr.push(lvv + "+" + rvv)
                        subArr.push(lvv + "-" + rvv)
                    })
                })

                if (!targetSet.has(add))targetSet.set(add, new Set())
                let addSet = targetSet.get(add)
                addArr.forEach(v => addSet.add(v))

                if (!targetSet.has(sub))targetSet.set(sub, new Set())
                let subSet = targetSet.get(sub)
                subArr.forEach(v => subSet.add(v))
            })
        })
    }

    //乘法组装
    function buildCurMapWithMult(leftSet, rightSet, targetSet){
        leftSet.forEach((lv, lk) => {
            rightSet.forEach((rv, rk) => {
                let k = lk * rk
                let varr = []
                lv.forEach(lvv => {
                    rv.forEach(rvv => {
                        varr.push(lvv + "*" + rvv)
                    })
                })

                if (!targetSet.has(k))targetSet.set(k, new Set())
                let kArr = targetSet.get(k)
                varr.forEach(v => kArr.add(v))
            })
        })
    }

    let multCache = new Array(num.length).fill(0).map(_ => new Array(num.length))
    function buildMult(start, end){
        if (multCache[start][end]) return multCache[start][end]

        let result = new Map()
        //全连 0不能作为开头
        if (start === end || nums[start] != 0){
            let all = parseInt(num.slice(start, end + 1))
            let set = new Set()
            set.add(num.slice(start, end + 1))
            result.set(all, set)
        }

        for (let i = start; i < end; i++){
            let left = buildMult(start, i)
            let right = buildMult(i + 1, end)
            buildCurMapWithMult(left, right, result)
        }
        multCache[start][end] = result
        return result
    }
    buildMult(0, nums.length - 1)

    for (let i = 1; i < num.length; i++){

        for (let j = 0; j <= i; j++){
            let left = cache[j - 1] || new Map()
            let right = buildMult(j, i)
            if (left.size === 0){
                right.forEach((v, k) => cache[i].set(k, v))
            } else {
                buildCurMapWithAddAndSub(left, right, cache[i])
            }
        }

    }

    if (cache[nums.length - 1].has(target)){
        return [...cache[nums.length - 1].get(target)]
    } else {
        return []
    }
}

// let x1 = addOperators("123", 6)
// let x2 = addOperators("232", 8)
// let x3 = addOperators("105", 5)
// let x4 = addOperators("00", 0)
// let x5 = addOperators("3456237490", 9191)
// let x6 = addOperators("2147483647", 2147483647)
// console.log(123)

