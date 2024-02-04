// Input: arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
// Output: 3 (1-> 3 -> 9 -> 9)
// Explanation: Jump from 1st element to 2nd element as there is only 1 step.
// Now there are three options 5, 8 or 9. If 8 or 9 is chosen then the end node 9 can be reached. So 3 jumps are made.

// Input:  arr[] = {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1}
// Output: 10
// Explanation: In every step a jump is needed so the count of jumps is 10.


//Minimum number of jumps to reach end (Jump Game)

// Input: arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// Output: 3 (1-> 3 -> 9 -> 9)

//logic
// function -> (arr, jumpCount)
// jumpCount = 1; i = 0, ele = 1, arr.length = 10;
// again call function -> ()

let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]; //10-1 = 9
var jumpCount = 0;
let jump = 0;
var hello = 0;

//find the next Jump
function getNextJump(arr, startIndex) {
    jumpCount += 1;
    let l = arr.length - startIndex;
    nextIndex = arr[startIndex];
    if (nextIndex >= l) {
      return jumpCount;
    } else {
      
      if (startIndex + 1 != nextIndex) {
        nextIndex += 1;
      }
      startIndex = findMaxIndex(startIndex, nextIndex);
      getNextJump(arr, startIndex);
    }
  }

if (arr.length === 0) {
  console.log("There is no jump possible");
} else if (arr.length == 1) {
  console.log("There only 1 jump possible");
} else if (arr.length > 1) {
   getNextJump(arr, jumpCount, jump);
  console.log("Total Number of Jumps :", jumpCount);
}

//find the largest elemet from given range in array
function findMaxIndex(start, end) {
  // if (start+1 == end) {
  //   ++end;
  // }
  // console.log(start, end);
  let maxEle = arr[start];
  let maxIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (maxEle < arr[i]) {
      maxIndex = i;
      maxEle = arr[i];
    }
  }
  return maxIndex;
}
// console.log(findMaxIndex(0,arr.length));
