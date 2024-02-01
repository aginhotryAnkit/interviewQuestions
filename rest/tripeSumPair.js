/* ==================================================================
                Find triplets which equals to zero (0)
======================================================================*/
const input = [5, 2, 6, -7, 1, -2, 0, 9,2];
let result = [];

console.log(input);

for (let i = 0; i < input.length; i++) {
    for (let j = i+1; j < input.length; j++) {
        for (let k = j+1; k < input.length; k++) {
            let temp = [];
            if(input[i]+input[j]+input[k]==0){
                temp.push([input[i],input[j],input[k]]);
                temp.sort();
                result.push(temp);
            }
        }
    }
}

console.log(result);