/*=================================================================
    Explode array and find sum of all elements of an flat array.
====================================================================*/

let arr = [1, 2, 3, 4, [5, 6, 7, [2, 3, 4]]];
let flatArr = [];
let sum = 0;
let str = "";

(function explodeArray(arr){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(Array.isArray(element))
        {
            explodeArray(element); //recurcive call
        } else {
            flatArr.push(element);
        }
    }
})(arr);

//sum of all element in the flat array
flatArr.map(item => {sum+=item; str+=`${item}+`;})
console.log(str,sum);