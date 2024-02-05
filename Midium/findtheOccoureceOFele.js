// best way to find the occurrence of the element in the given array.


//Yeh hai aam jindagi
function findAllOccurrence(arr=[]){
    let occurrenceArr = {};

    for(ele of arr){
        if(occurrenceArr[ele]){
            occurrenceArr[ele]++;
        }else{
            occurrenceArr[ele] = 1;
        }
    }

    return occurrenceArr;
}


let countArrEle = {};
let arr = [1,1,4,5,6,7,8,6,3,4,8,5];
arr.map((ele)=>(countArrEle[ele])?countArrEle[ele]++:countArrEle[ele]=1);


//ye hai aam jindagi
console.log(findAllOccurrence(arr));

//ye hai mintos jindagi
console.log(countArrEle);