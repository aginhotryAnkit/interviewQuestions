// find the max sum amoung all the sum of rotation of an array

// Input: arr[] = {8, 3, 1, 2}
// Output: 29
// Explanation: Lets look at all the rotations,
// {8, 3, 1, 2} = 8*0 + 3*1 + 1*2 + 2*3 = 11
// {3, 1, 2, 8} = 3*0 + 1*1 + 2*2 + 8*3 = 29
// {1, 2, 8, 3} = 1*0 + 2*1 + 8*2 + 3*3 = 27
// {2, 8, 3, 1} = 2*0 + 8*1 + 3*2 + 1*3 = 17

// Input: arr[] = {3, 2, 1}
// Output: 7
// Explanation: Lets look at all the rotations,
// {3, 2, 1} = 3*0 + 2*1 + 1*2 = 4
// {2, 1, 3} = 2*0 + 1*1 + 3*2 = 7
// {1, 3, 2} = 1*0 + 3*1 + 2*2 = 7


let arr = [3, 2, 1];
let length = arr.length;
let sumArr = [];
let hightestSum = 0;

arr.map((ele,index,mapArr)=>{
    let temp =[];
    if(length==0){
        for(i=index;i<length;i++){
            // console.log(mapArr[index]);
            temp.push(mapArr[i]);
        }
    } else {
        for(i=index;i<length;i++){
            temp.push(mapArr[i]);
        }

        for(i=0;i<index;i++){
            temp.push(mapArr[i]);
        }
    }

    let sum = temp.reduce((acc,ele,index,arr)=>acc += ele*index,0);
    sumArr.push(sum);
    if(index==0){
        hightestSum = sum;
    }else if(sum>hightestSum){
        hightestSum = sum;
    } 
});

console.log("Sum arr = ",sumArr);
console.log("Hightest Sum = ", hightestSum);