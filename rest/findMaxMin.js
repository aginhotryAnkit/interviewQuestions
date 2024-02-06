/*=========================================================
                    find next max and smallest.
===========================================================*/
const numberArr = [0, 120, 111, 215, 54, 78];

function maxMinArr(numberArr=[]){
    var max=numberArr[0],min=numberArr[0];
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > max) {
            max = numberArr[i];
          }
        
          if (numberArr[i] < min) {
            min = numberArr[i];
          }
    }
    console.log(max);
    console.log(min);
}

//optimized code 
let maximum = numberArr.reduce((acc,ele)=>(ele>acc)?acc=ele:acc=acc,numberArr[0]);
let minimum = numberArr.reduce((acc,ele)=>(ele<acc)?acc=ele:acc=acc,numberArr[0]);

console.log("Maximum:", maximum);
console.log("Maximum:", minimum);


// maxMinArr(numberArr);