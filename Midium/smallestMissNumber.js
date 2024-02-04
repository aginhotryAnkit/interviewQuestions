// find the smallest positive missing number
// Input:  arr[] = {2, 3, 7, 6, 8, -1, -10, 15}
// Output: 1

// Input:  arr[] = { 2, 3, -7, 6, 8, 1, -10, 15 }
// Output: 4

// Input: arr[] = {1, 1, 0, -1, -2}
// Output: 2

let arr = [ 1, 1, 0, -1, -2]

function findMissNumber(arr){
    let SmallestNumber = 1;
    let posNumber = arr.filter((ele)=>(ele>0));
    
    posNumber.sort((a,b)=>a-b);
    
    for(let ele of posNumber){
        if(ele==SmallestNumber){
           SmallestNumber++;
        }else{
            return SmallestNumber;
        }
    }
}
console.log("Missing Number ", findMissNumber(arr));