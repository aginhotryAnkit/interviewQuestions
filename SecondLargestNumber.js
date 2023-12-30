//find the second largest number from the given array

let arr = [1,2,3,25,4,5,15];
let largest = (function (arr=[]){
    let large = arr[0];
    arr.map(function (ele){
        if(large<ele){
            large = ele;
        }
    });
    return large;
})(arr);

console.log("First Largest",largest);

let secondLargest = (function (arr=[], largest){
    let secondLarge = arr[0];
    arr.map(function (ele){
        if(secondLarge<ele && ele!=largest){
            secondLarge = ele;
        }
    });
    return secondLarge;
})(arr,largest);
console.log("Second Largest :",secondLargest);

//find the largest number using recursion
function largestRecursion(arr=[],count,lg){
    // console.log(count,lg);
    if(count==0){
        console.log("largest element using recursion :",lg);
        return lg;
    }
    if(lg<arr[count]){
        lg=arr[count];
    }
    count--;
    largestRecursion(arr,count,lg);
}
largestRecursion(arr,arr.length,arr[0]);


//find the kth largest element in the given array
