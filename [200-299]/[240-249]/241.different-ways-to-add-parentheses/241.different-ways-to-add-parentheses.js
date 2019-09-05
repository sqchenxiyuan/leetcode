/*
 * @lc app=leetcode id=241 lang=javascript
 *
 * [241] Different Ways to Add Parentheses
 */
/**
 * @param {string} input
 * @return {number[]}
 */
let diffWaysToCompute = function(input) {
    let len = input.length
    
    let elements = []
    for (let i = 0; i < len;){
        let c = input[i]
        if ("0" <= c && c <= "9"){
            let n = i + 1
            while (n < len && "0" <= input[n] && input[n] <= "9") n++
            elements.push(parseInt(input.slice(i, n)))
            i = n
        } else {
            switch (c){
                case "*": elements.push((a, b) => a * b); break
                case "+": elements.push((a, b) => a + b); break
                case "-": elements.push((a, b) => a - b); break
            }
            i++
        }
    }

    let cache = new Array(elements.length).fill(0).map(_ => new Array(elements.length))
    function compute(start, end){
        if (cache[start][end]) return cache[start][end]
        let result = []
        if (start === end){
            result.push(elements[start])
        } else {
            let numOfOptions = Math.floor((end - start) / 2)
            for (let i = 0; i < numOfOptions; i++){
                let center = start + i * 2 + 1
                let option = elements[center]
                let left = compute(start, center - 1)
                let right = compute(center + 1, end)
                left.forEach(l => {
                    right.forEach(r => {
                        result.push(option(l, r))
                    })
                })
            }
        }
        cache[start][end] = result
        return result
    }

    return compute(0, elements.length - 1)
}

// let x1 = diffWaysToCompute("2-1-1")
// let x2 = diffWaysToCompute("2*3-4*5")
// console.log(123)

