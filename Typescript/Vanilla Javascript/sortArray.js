// Optimal solution using built-in functions:
function sortArray(arr) {
    return arr.sort();
}

// Possible variation - check if words are valid anagrams (word formed by rearranging letters from another word):
function isAnagram(s, t) {
    // if length of words is different, they cannot be anagrams
    if (s.length != t.length) {
        return false;
    }
    // sort characters in each string and compare for equality
    return s.split("").sort().join("") === t.split("").sort().join("");
}

// Tests:
console.log(sortArray([9,1,2,4,2,6,0]));
console.log(isAnagram("iceman", "cinema"));
console.log(isAnagram("home", "house"));