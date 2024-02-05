// Input:  arr[] = {10, 5, 6, 3, 2, 20, 100, 80}
// Output: arr[] = {10, 5, 6, 2, 20, 3, 100, 80} 
// Explanation: 
// here you can see {10, 5, 6, 2, 20, 3, 100, 80} 
// first element is larger than the second and the 
// same thing is repeated again and again. large element – 
// small element-large element -small element and so on .
// it can be small element-larger element – small element-large
// element -small element too. all you need to maintain is the
// up-down fashion which represents a wave. there can be multiple answers.


function createWaveLength(arr=[]){
    arr.sort((a,b)=>b-a);
    let newArr = [];
    let result = [];
    if(arr.length%2==0){
        newArr = arr.splice(1,arr.length-2);
    }else{
        newArr = arr.splice(1,arr.length-1);
    }

    let even = newArr.filter((ele,index)=>(index%2==0));
    let odd = newArr.filter((ele,index)=>(index%2!=0));

    let shiftArr = [];
    odd.map((ele,index)=>{
        shiftArr.push(ele);
        shiftArr.push(even[index]);
    });

    if(arr.length%2==0){
        result = [arr[0],...shiftArr, arr[arr.length-1]]; 
    }else{
        result = [arr[0],...shiftArr]; 
    }

    return result;

}


let arr = [20, 10, 8, 6, 4, 2, 1];
console.log("Input Arr", arr);
console.log("Wave Length Balance Element Arr: ", createWaveLength(arr));