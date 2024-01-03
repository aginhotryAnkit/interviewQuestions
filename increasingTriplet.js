
let nums = [1,2,3,4,5]
flag = false;
nums.map(function (ele, index) {
    if (index + 2 <= nums.length) {
        if (nums[index] < nums[index + 1]) {
            if(nums[index + 1]<nums[index + 2]){
                flag = true;
            }
        }
    }
})
console.log(flag);