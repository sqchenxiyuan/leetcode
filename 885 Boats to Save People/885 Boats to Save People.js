/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
let numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b)

    let count = 0
    let i = 0
    let j = people.length - 1
    while (i <= j){
        count++
        if (i === j) break
        if (people[i] + people[j] <= limit) i++
        j--
    }
    return count
}
console.log(numRescueBoats([1, 2], 3))
console.log(numRescueBoats([3, 2, 2, 1], 3))
console.log(numRescueBoats([3, 5, 3, 4], 5))
console.log(numRescueBoats([], 5))