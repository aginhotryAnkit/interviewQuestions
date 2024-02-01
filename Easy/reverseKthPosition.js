// //input arr = [1,2,3,4,5,6]
// //kth position k=2
// //output arr=[3,2,1,4,5,6]

//own code

// let  arr = [1,2,3,4,5,6]
// let k = 2;
// let result = [];
// arr.map(function (ele,index){
//     if(index<=k){
//         result.push(ele);
//         if(index==k){
//             result = result.reverse();
//         }
//     } else{
//         result.push(ele);
//     }

// });

// console.log("Input :", arr);
// console.log("Output :", result);


//improve code
let  arr = [1,2,3,4,5,6];
let k = 9;
let result = [...arr.slice(0,k).reverse(),...arr.slice(k,arr.length)];
console.log(result);