// Input: array[]= {5, 10, 20, 15}
// Output: 20
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

let arr = [10, 20, 15, 2, 23, 90, 67, 3, 5, 6, 7, 4, 5 6];
let result = arr.filter((ele,index) => index>0 && index<arr.length-1 && ele>arr[index-1] && ele>arr[index+1]);
console.log("maxElementWithGreaterNeighbors", result);
// done Happy Coding ...