//Find the Lonely Interger 
let arrIn = [1,2,3,4,1,2,3];

function checkElementOccurrence(arr){
    let occurrence = {};
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i]==arr[j]){
                count+=1;
            }
        }
        if(!occurrence.hasOwnProperty(arr[i])){
            occurrence[arr[i]]=count;
        }
    }

   return occurrence;
}

//my code 
let occurrence = checkElementOccurrence(arrIn);
let lonelyInteger = [];
Object.keys(occurrence).map(function (ele) {
    if(occurrence[ele]==0){
        lonelyInteger.push(ele);
    }
});

//optimized code
const lonelyIntegerFind = (arr) => {

    return arr.reduce((unique, current) => {
        unique ^= current;
        return unique;
    }, 0);
}

console.log(lonelyIntegerFind(arrIn));

// console.log("Lonely Integer In given Array :",lonelyIntiger);



//Expiation of the same program with the easy example
// let unique = 0;
// let current = 3;

//unique ^= current; // unique = unique ^ current
// At this point, unique is 3 (binary: 0011)

// current = 3;
// unique ^= current;
// XORing with the same value cancels out, so unique becomes 0

//current = 5;
//unique ^= current;
// XORing with a different value updates unique, so unique becomes 5 (binary: 0101)

// After processing the entire array, unique will be the XOR of all elements,
// and the result will be the integer that appears only once in the array.