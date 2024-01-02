let arr = [1,6,8,4,9,3];
let copy = [];
arr.map(function (ele){
   copy.push(ele);
});
console.log("Sort Array: ",copy.sort());
//find the kth largest element in the given array
function kthLargestEle(arr=[], findSeq){
    let kthLargest= arr[0];
    let findLargest = [];
    let currentLargest = 0;
    for (let i = 0; i < findSeq; i++) {
        for (let j = 0; j < arr.length; j++) {
            //first time execute condition
            if(kthLargest<arr[j] && findLargest.length==0){
                kthLargest = arr[j];
            }

            //rest time execute condition
            if(arr[i]<=arr[j] && findLargest.length!=0 && !findLargest.includes(arr[j])){
                kthLargest = arr[j];
                // console.log(arr[i],arr[j],kthLargest);
            }

            // if(findLargest.length!=0){
            //     console.log(arr[i],arr[j]);
            // }
        }
        // console.log("\ninner loop end");SS

        currentLargest = kthLargest;
        findLargest.push(kthLargest);
        // console.log(findLargest);

        // console.log("largest",currentLargest);
    }

    console.log(`${findSeq}th largest element: ${kthLargest}`);
    // console.log(findLargest);
}

kthLargestEle(arr,10);