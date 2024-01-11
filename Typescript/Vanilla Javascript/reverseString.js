// Optimal solution using built-in functions:
function optimalSolution(str) {
    // split() breaks string into array of component characters ('' is a separator - in this case no separator) 
    // reverse() built in function to reverse elements of array
    // join() combines elements of array into a string ('' is a separator - in this case no separator) 
    return str.split('').reverse().join('');
}

// Alternative solution without using built-in functions:
function alternativeSolution(s) {
    var reversed = '';
    for (var i = s.length - 1; i >= 0; i--) {
        reversed = reversed + s[i];
    }
    return reversed;
};

// Common variation - is word a palindrome (optimal solution):
function isPalindrome(str) {
    // Reverses string then compares lower cased versions for equality
    return str.split('').reverse().join('').toLowerCase() === str.toLowerCase();
}

// Common variation - is word a palindrome (without built-in functions):
function isAnotherPalindrome(s) {
    var reversed = '';
    for (var i = s.length - 1; i >= 0; i--) {
        reversed = reversed + s[i];
    }
    return reversed.toLowerCase() === s.toLowerCase();
}

// Tests:
console.log(optimalSolution("Hello"));
console.log(alternativeSolution("Hello"));
console.log(isPalindrome("Wow"));
console.log(isPalindrome("Wood"));
console.log(isAnotherPalindrome("Wow"));
console.log(isAnotherPalindrome("Wood"));