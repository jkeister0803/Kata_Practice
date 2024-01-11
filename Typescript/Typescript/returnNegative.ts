/*
Given an number, return the negative value of the number.
*/

// My solution:
export const makeNegative = (num: number): number => {
    return -Math.abs(num);
};

// Tests:
console.log(makeNegative(4));
console.log(makeNegative(0));
console.log(makeNegative(-4));