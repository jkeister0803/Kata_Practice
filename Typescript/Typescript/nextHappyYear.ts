/*
Given a year, determine the next happy year.
Happy years are years with only distince digits (e.g.) 2018

Notes:
Year is always positive
Argument passed to function does not need to be a happy year
Input year range 1000 <= y <= 9000
*/

// My solution:
export function nextHappyYear(year: number): number {
    let isHappy = false;
    let nextYear = year + 1;
    while (isHappy == false) {
        // convert nextYear to array of digits
        let yearArr = String(nextYear).split("").map((nextYear) => {
            return Number(nextYear);
        })
        // loop through digits to determine uniqueness   
        for (let i = 1; i < yearArr.length; i++) {
            let newArr = [yearArr[0]];
            let current = yearArr[i];
            if (newArr.indexOf(current) != -1) {
                nextYear += 1;
                break;
            }
            newArr.push(current);
        }
    }
    isHappy = true;
    return nextYear;
}

// Test:
console.log(nextHappyYear(1001)); // 1023
console.log(nextHappyYear(1123)); // 1203
console.log(nextHappyYear(2001)); // 2013
console.log(nextHappyYear(2334)); // 2340
console.log(nextHappyYear(3331)); // 3401
console.log(nextHappyYear(1987)); // 2013
console.log(nextHappyYear(5555)); // 5601