
// Cyclically rotating an array by one means shifting all elements of the array to the right by one position, with the last element moving to the first position. This operation essentially rotates the array in a circular manner.

// For example, consider the array [1, 2, 3, 4, 5]. After cyclically rotating it by one, the array becomes [5, 1, 2, 3, 4]. Here's how the rotation works:

//!My Solution
let arr = [1,2,3,4,5];
let last = arr[arr.length-1];
let result = [last,...arr.splice(0,arr.length-1)];
console.log(result);


//! Chat Gpt Provided Solution
// function cyclicallyRotateByOne(arr) {
//     if (arr.length <= 1) {
//         return arr; // No need to rotate if array has 0 or 1 element
//     }
    
//     const lastElement = arr.pop(); // Remove the last element
//     arr.unshift(lastElement); // Add it to the front of the array
//     return arr;
// }

// const arr = [1, 2, 3, 4, 5];
// const rotatedArray = cyclicallyRotateByOne(arr);
// console.log(rotatedArray);