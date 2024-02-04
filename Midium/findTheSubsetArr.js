// Input: arr1[] = {11, 1, 13, 21, 3, 7}, arr2[] = {11, 3, 7, 1} 
// Output: arr2[] is a subset of arr1[]

// Input: arr1[] = {1, 2, 3, 4, 5, 6}, arr2[] = {1, 2, 4} 
// Output: arr2[] is a subset of arr1[]

let arr1 = [11, 1, 13, 21, 3, 7];
let arr2 = [2, 11, 3, 7, 1];
//check weather the arr2 is a subset of arr 1 or not

function findSubset(arr1, arr2){
    let isSubset = true;
    for(ele of arr2){
        if(!arr1.includes(ele)){
            return false;
        }
    }
    return isSubset;
}

let isSubset = findSubset(arr1, arr2);

if(isSubset){
    console.log("arr2 is subset of arr1");
}else {
    console.log("arr2 is not subset of arr1");
}

console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log();