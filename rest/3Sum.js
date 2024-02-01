let nums = [-1,0,1,2,-1,-4];
let result = [];
let duplicate = [];

for (let i = 0; i < nums.length; i++) {
    
    for (let j = i+1; j < nums.length; j++) {
        
        for (let k = j+1; k < nums.length; k++) {
            
            if(nums[i]+nums[j]+nums[k]==0 && !duplicate.includes([nums[i],nums[j],nums[k]].sort((a,b)=>a-b).toString()))
            {
                duplicate.push([nums[i],nums[j],nums[k]].sort((a,b)=>a-b).toString());
                result.push([nums[i],nums[j],nums[k]]);
                
            }
            
        }
    }
}


console.log(result);