let inArr = [10,20,30,40,5,6,7];
console.log(inArr.sort((a,b)=>{
    console.log(a,b);
}));

console.log(inArr.sort());

// const medianOfArr = (arr) => {
//     arr.sort((a, b) => a - b);

//     let length = arr.length;
//     if (length % 2) {
//         return (arr[length / 2 - 0.5])
//     } else {
//         return (arr[length / 2] + arr[(length / 2) - 1]) / 2
//     }
// }

// console.log(medianOfArr(inArr));