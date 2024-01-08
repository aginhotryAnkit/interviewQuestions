let shortArr = (arr=[])=> {
    let negative = [];
    let positive = arr.filter((ele)=>{
        if(ele>=0){
            return true;
        }else{
            negative.push(ele);
        }
    });

    if(negative.length==0){
        return positive.sort((a,b)=>a-b);
    }
    if(positive.length==0){
        return negative.sort().reverse()
    }

    return negative.sort().reverse().concat(positive.sort())
};

let a = [1];
let b = [2,3,4,5,6,7,8,9,10];
    // console.log(b.sort());
a = shortArr(a.concat(b));

// console.log("",a.sort());

console.log(a);
let length = a.length;
let medium = 0;
if(length%2!=0){
    if(length==3){
        medium = a[1];
    }else {
        medium = a[(length/2)-0.5];
    }
} else {
    // console.log(a[(length/2)], a[((length/2)-1)]);
    medium = (a[(length/2)]+a[((length/2)-1)])/2;
}

console.log(medium);
console.log(length);

// console.log(shortArr([0,1,5,6]));


