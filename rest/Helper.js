class Helper {
    checkElementOccourence(arr){
        let occourence = {};
        for (let i = 0; i < arr.length; i++) {
            let count = 0;
            for (let j = i+1; j < arr.length; j++) {
                if(arr[i]==arr[j]){
                    count+=1;
                }
            }
            if(!occourence.hasOwnProperty(arr[i])){
                occourence[arr[i]]=count;
            }
        }
    
       return occourence;
    }

}