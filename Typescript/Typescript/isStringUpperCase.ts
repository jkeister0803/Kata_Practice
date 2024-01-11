/*
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/


// My solution:
export function isUpperCase(str: string) {
    return str === str.toUpperCase();
}

// Tests:
console.log(isUpperCase("c"));  // false
console.log(isUpperCase("C"));  // true
console.log(isUpperCase("hello I AM DONALD"));  // false
console.log(isUpperCase("HELLO I AM DONALD"));  // true
console.log(isUpperCase("ACSKLDFJSgSKLDFJSKLDFJ"));  // false
console.log(isUpperCase("ACSKLDFJSGSKLDFJSKLDFJ"));  // true