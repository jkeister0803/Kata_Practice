/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// My solution:
export function evenOrOdd(n:number):string {
    const type = n % 2 === 0 ? "Even" : "Odd";
    return type;
  }

// Tests:
console.log(evenOrOdd(5));
console.log(evenOrOdd(4));
console.log(evenOrOdd(0));
console.log(evenOrOdd(7));