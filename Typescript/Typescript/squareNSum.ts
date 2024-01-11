/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1sq + 2sq + 2sq = 9
*/

// My solution:
export function squareSum(numbers: number[]): number {
    let sum = 0;
    numbers.forEach((num) => {
        sum += Math.pow(num, 2);
    })
    return sum;
}

// Test:
console.log(squareSum([1,2,2]));