"use strict";
/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array
(in the same order). The original array will be not empty and will contain at least "number" even numbers.

Examples:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.evenNumbersOne = exports.evenNumbers = void 0;
// My solution:
function evenNumbers(array, n) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            result.push(array[i]);
        }
    }
    while (result.length > n) {
        result.shift();
    }
    return result;
}
exports.evenNumbers = evenNumbers;
// Alternate solution:
function evenNumbersOne(array, n) {
    return array.filter(function (x) { return x % 2 === 0; }).slice(-n);
}
exports.evenNumbersOne = evenNumbersOne;
// Test:
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));
console.log('-----');
console.log(evenNumbersOne([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(evenNumbersOne([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
console.log(evenNumbersOne([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));
