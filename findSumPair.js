
/*====================================================
             Find pairs which equals to 15
======================================================*/

let arr = [3,1,3,4,3]
let dup = [];
sum =6;
let pariArr = [];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        var num1 = arr[i];
        var num2 = arr[j];
        var temp = String(num1) + String(num2);
        if (arr[i] + arr[j] == sum && !dup.includes(arr[i]) && !dup.includes(arr[j])){
            dup.push(arr[i]);
            dup.push(arr[j]);
            pariArr.push([arr[i], arr[j]]);
            count+=1;
        }
    }
}

console.log("Paired Array which is equal to 15");
console.log("Count "+count);
console.log(pariArr);
console.log(dup);

//full complated // buts its only work with single digit values optimized it please
//now its work with two digits
