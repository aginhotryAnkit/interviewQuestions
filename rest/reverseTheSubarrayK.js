let arr = [1,2,3,4,5,6,7,8,9,10];
let size = 3;
let result = [];
let curSize = (arr.length%3==0)?arr.length/3:Math.floor(arr.length/3);
let gap = 0;

for(i=0;i<curSize;i++){
    if(gap==0){
        console.log("+++",spliceArr(arr,gap,1*curSize-1));
        gap = curSize-1;
    } else {
        console.log("---",spliceArr(arr,gap+1,gap*curSize-1));
        gap *= curSize-1;
    }

    console.log("Gap", gap);
}

function spliceArr(arr, start, end){
    let result = [];
    console.log(start,end);
    for(let j=start; j<=end;j++){
        result.push(arr[j]); 
    }
    return result;
}

// console.log(curSize);
console.log("Original Array : ", arr);
console.log("Cut Size : ", result);