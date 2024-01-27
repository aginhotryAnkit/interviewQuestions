let series = [5, 8, 9, 11, 13, 15, 17, 19];
let sorted = series.sort((a,b)=>a-b); 
let min = sorted[0];
let max = sorted[sorted.length-1];
let result = [];
for (let i = min; i <max; i++) {
        if(!series.includes(i)){
           result.push(i); 
        }
}

console.log(series);
console.log(result);
