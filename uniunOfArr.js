// find the union between two array [command element]

let a = [2, 3, 4, 5, 6, 7, 8];
let b = [5, 9, 10, 12, 15, 4, 6];

console.log("a",a);
console.log("b",b);

let maxArr = a.length>b.length?a:b;
let minArr = a.length>b.length?b:a;

let intersection = maxArr.filter((ele)=>{ 
    if(minArr.includes(ele)){
        return true;
    }
});
intersection = new Set(intersection);
console.log("intersection:", intersection);
console.log("union:" ,new Set(a.concat(b)));