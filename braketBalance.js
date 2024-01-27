let brackets = "[{{{{()}}}}]";

let countBrackets = {};
let balance = brackets.split("");

balance.forEach((ele) => {
    countBrackets[ele] = (countBrackets[ele] || 0) + 1;
});

let bracketBalanceCheck =  true;

for (let i = 0; i < Object.keys(countBrackets).length-1; i++) {
    const ele = Object.keys(countBrackets)[i];

    if(ele=="{"){
        if(countBrackets["}"]){
            bracketBalanceCheck = countBrackets[ele]==countBrackets["}"];
        } else {
            bracketBalanceCheck = false;
        }
    } else if(ele=="["){
        if(countBrackets["]"]){
            bracketBalanceCheck = countBrackets[ele]==countBrackets["]"];
        } else {
            bracketBalanceCheck = false;
        }
    } else if(ele=="("){
        if(countBrackets[")"]){
            bracketBalanceCheck = countBrackets[ele]==countBrackets[")"];
        } else {
            bracketBalanceCheck = false;
        }
    }

    if(!bracketBalanceCheck){
        break;
    }
}

console.log(countBrackets);
console.log(bracketBalanceCheck);

