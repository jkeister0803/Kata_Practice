/*
In this kata you should simply determine, whether a given year is a leap year or not. 
In case you don't know the rules, here they are:

Years divisible by 4 are leap years,
but years divisible by 100 are not leap years,
but years divisible by 400 are leap years.
Tested years are in range 1600 ≤ year ≤ 4000.
*/

// My solution:
export function isLeap(year: number):boolean {
    let isLeapYear = false;
    if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        return isLeapYear = true;
    } else if (year % 4 == 0 && year % 100 == 0) {
        return isLeapYear;
    } else if (year % 4 == 0) {
        return isLeapYear = true;
    } else {
        return isLeapYear;
    }
}

// Alternate solution:
export function isLeapAlt(year: number):boolean {
    return year % 400 == 0 || year % 100 != 0 && year % 4 == 0;
}

// Test:
console.log(isLeap(2020)); // true
console.log(isLeap(2000)); // true
console.log(isLeap(2015)); // false
console.log(isLeap(2100)); // false
console.log('---------');
console.log(isLeapAlt(2020)); // true
console.log(isLeapAlt(2000)); // true
console.log(isLeapAlt(2015)); // false
console.log(isLeapAlt(2100)); // false