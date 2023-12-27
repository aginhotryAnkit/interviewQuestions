
/*====================================================
             Find pairs which equals to 15
======================================================*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 11, 13]
let dup = [];
sum =12;
let pariArr = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        var num1 = arr[i];
        var num2 = arr[j];
        var temp = String(num1) + String(num2);
        if (arr[i] + arr[j] == sum && !dup.includes(arr[i]) && !dup.includes(arr[i])){
            dup.push(arr[i]);
            dup.push(arr[j]);
            pariArr.push([arr[i], arr[j]]);
        }
    }
}

console.log("Paired Array which is equal to 15");
console.log(pariArr);

//full complated // buts its only work with single digit values optimized it please
//now its work with two digits
