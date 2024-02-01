let arr = [1,2,3,4,5,6,7,8,9];
let start = 4;
let end = 9;
result = [...arr.slice(start-1,end)].reduce((ele,acc)=>acc+ele,0);
console.log("Sum of "+arr.slice(start-1,end).join("+")+" = "+result);