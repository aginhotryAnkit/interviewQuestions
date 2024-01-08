let num =99999991;
let sum=0;
var checkPerfectNumber = function(num) {
    for (let i = 0; i < num; i++) {
        if(num%i==0){
            sum+=i;
        }

        if(sum>num){
            return false;
        }
    }
    return (num==sum)?true:false;
};

console.log(checkPerfectNumber(num));