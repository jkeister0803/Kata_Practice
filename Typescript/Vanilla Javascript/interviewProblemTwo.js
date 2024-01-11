// Objective: Print specific statements depending on remainder values.
// If remainder < 1: print the remainder of {} / {} is less than one.
// If remainder = 0: print {} is fully divisible by {}.
// If remainder > 1: print the remainder of {} / {} is greater than one.

const array = [
    60, 99, 82, 46, 11,
    66, 44,  2, 65, 46
  ]


// My solution:
function getRemainder(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j >= 0; j--) {
            let rem = arr[i] % arr[j];
            if (rem > 1) {
                console.log('The remainder of %d / %d is greater than one.', arr[i], arr[j]);
            }
            else if (rem > 0) {
                console.log('The remainder of %d / %d is less than one.', arr[i], arr[j]);
            }
            else {
                console.log('%d is fully divisible by %d', arr[i], arr[j]);
            }
        }
    }
}

// Test:
//getRemainder(array);
console.log(99 % 3);