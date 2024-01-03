//Compress the string based upon the occurrence of the each char

let chars = ["a","a","b","b","c","c","c"];

var compress = function (chars) {

    if (chars.length <= 1) {
        return chars.length;
    }
    var result = [];
    var compressCount = 0;
    chars.map(function (char, index, arr) {
        let count = arr.reduce(function (acc, current) {
            if (current == char) {
                acc += 1;
            }
            return acc;
        }, 0);

        if (!result.includes(char) && count > 1 && count < 10) {
            result.push(char);
            result.push(String(count));
            compressCount += count;
        } else if (!result.includes(char) && count <= 1) {
            result.push(String(char));
            compressCount += 1;
        } else if (!result.includes(char) && count >= 10) {
            result.push(char);
            String(count).split("").map(function (ele) {
                result.push(String(ele));
                compressCount+=Number(ele);
            });
        }
    });
    
    console.log("Original String :",chars.join(""));
    console.log("Compress String : ",result.join(""));
    console.log("Length :"+result.length);
};


compress(chars);