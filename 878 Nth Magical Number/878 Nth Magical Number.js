/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
let nthMagicalNumber = function(N, A, B) {
    let set = new Set()
    for (let i = 1; i <= A; i++){
        set.add(B * i)
    }
    for (let i = 1; i <= B; i++){
        set.add(A * i)
    }
    let arr = [...set].sort((a, b) => a - b)
    
    let x = A * B
    let n = arr.length

    let scale = Math.floor(N / n)
    let nth = N % n

    return ((x * scale) % 1000000007 + (nth > 0 && arr[nth - 1])) % 1000000007
}

