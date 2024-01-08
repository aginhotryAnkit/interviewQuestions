let l1 = [9,9,9], l2 = [9,9,9]

// console.log(l1);
// console.log(l2);

let carry = 0;
let result = [];
l1.map((ele,index)=>{
    if(index<l2.length){
        if(carry==0 && String(ele+l2[index]).length==2){

            let arr = String(ele+l2[index]).split("");
            carry = Number(arr[0]);
            result.push(arr[1]);

        } else if(carry>0 && String(ele+l2[index]+carry).length==2){

            if(String(ele+l2[index]+carry).length>1){
                let arr = String(ele+l2[index]+carry).split("");
                carry = Number(arr[0]);
                result.push(arr[1]);
            } else {
                result.push(ele+l2[index]+carry);
                carry = 0;
            }
        } else if(carry>0 && String(ele+l2[index]+carry).length==1){
            if(String(ele+l2[index]+carry).length>1){
                let arr = String(ele+l2[index]+carry).split("");
                carry = Number(arr[0]);
                result.push(arr[1]);
            } else {
                result.push(ele+l2[index]+carry);
                carry = 0;
            }
        } else if(carry==0 && String(ele+l2[index]).length==1){
            if(String(ele+l2[index]+carry).length>1){
                let arr = String(ele+l2[index]+carry).split("");
                carry = Number(arr[0]);
                result.push(arr[1]);
            } else {
                result.push(ele+l2[index]+carry);
                carry = 0;
            }
        }
        if(index==l1.length-1 && carry!=0){
            result.push(carry);
        }
    }else {
        if(carry>0 && String(ele+carry).length==2){
            let arr = String(ele+carry).split("");
            carry = Number(arr[0]);
            result.push(arr[1]);
        } else {
            result.push(ele);
        }

        if(index==l1.length-1 && carry!=0){
            result.push(carry);
        }
    }
});

console.log(result);