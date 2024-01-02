// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
//Given an integer array nums, return an array answer such that
//answer[i] is equal to the product of all the elements of nums except nums[i]

let nums = [0,4,0];

let newArr = nums.map((ele,index,arr)=>{
    var acc=1;
    arr.map(function (ele1,index2){
        if(index2!=index){
            if(ele1==0){
                acc=0;
            }
            acc=acc*ele1;
        }
    });

    return acc;
});

//program is right but it is exxeding the time limit 

console.log(newArr);