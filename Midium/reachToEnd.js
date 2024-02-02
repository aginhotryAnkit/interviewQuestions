// Input: arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
// Output: 3 (1-> 3 -> 9 -> 9)
// Explanation: Jump from 1st element to 2nd element as there is only 1 step.
// Now there are three options 5, 8 or 9. If 8 or 9 is chosen then the end node 9 can be reached. So 3 jumps are made.

// Input:  arr[] = {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1}
// Output: 10
// Explanation: In every step a jump is needed so the count of jumps is 10.



let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
let  jumpCount = 0;
let value = arr[0];

arr.reduce((acc,ele,index,arr)=> {

    if(acc<arr.length-1){
        let result = findMaxIndex(acc,value,arr);
        acc = result['index'];
        value = result['max'];
        // console.log(acc);
        // jumpCount+=1;
        console.log(result);
    }

    // console.log((acc<arr.length-1), acc, arr.length-1);

    return acc;
},0);

function findMaxIndex(start, end, arr){
    console.log(start,end);
    let idx = 0;
    let max = arr[start];
    for(let i = start; i<=end;i++){
        if(arr[i]>max){
            idx = i;
            max = arr[i];
        }
    }
    return {"max":max, "index":idx};
}

console.log("Jumps "+jumpCount);