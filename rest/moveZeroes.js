let nums = [0,1,0,3,12];
let zerosCount = 0;

let count = 0;
for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    if(ele==0){
        zerosCount+=1;
    } else if(ele!=0){
        nums[count] = nums[i];
        count++; 
    }
}

let arrLength = nums.length;
for(let i=0;i<zerosCount;i++){
    nums[arrLength-1] = 0;
    arrLength--;
}

console.log(nums);
    
   

// for(let i =0;i<zerosCount;i++){
//     nums.push(0);
// }


// moveZero.push("0".repeat(zerosCount).split("")); Nyc Code
// console.log(nums);
// console.log(moveZero);
// console.log(zerosCount);