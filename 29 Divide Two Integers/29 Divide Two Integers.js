/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let divide = function(dividend, divisor) {
    let negative = false //是否为负数
    
    if (dividend < 0) {
        dividend = -dividend
        negative = !negative
    }

    if (divisor < 0) {
        divisor = -divisor
        negative = !negative
    }

    let sumarr = [{
        sum: 0,
        num2: 0
    }, {
        sum: divisor,
        num2: 1
    }]
    for (let i = 2;;i++){
        let last = sumarr[i - 1] 
        let obj = {
            sum: last.sum + last.sum,
            num2: last.num2 + last.num2
        }
        if (obj.sum > dividend){
            break
        } else {
            sumarr.push(obj)
        }
    }

    let residue = dividend
    let number = 0
    for (let i = sumarr.length - 1; i > 0; i--){
        let obj = sumarr[i]
        if (residue >= obj.sum){
            number = number + obj.num2
            residue = residue - obj.sum
        }
    }
    if (negative) number = -number

    if (number < -Math.pow(2, 31) || number > Math.pow(2, 31) - 1){
        return Math.pow(2, 31) - 1
    }
    
    return number
}

console.log(Math.pow(2, 31))
console.log(divide(10, 3)) //3
console.log(divide(7, -3)) //-2
console.log(divide(1, 1)) //-2
console.log(divide(2147483648, 1)) //-2
console.log(divide(-2147483648, 1)) //-2
