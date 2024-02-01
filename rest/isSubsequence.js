let s = "acb",
  t = "ahbgdc";
var isSubsequence = function (s, t) {
  let longStr = "",
    smallStr = "";

  if (s.length == 0) {
    return true;
  }

  if (t.length == 0) {
    return false;
  }

  if (s.length >= t.length) {
    longStr = s;
    smallStr = t;
  } else {
    longStr = t;
    smallStr = s;
  }

  let tArr = smallStr.split("");
  let count = 0;
  let indexArr = [];

  smallStr.split("").map((ele) => {
    if (longStr.includes(ele)) {
      indexArr.push(longStr.indexOf(ele));

      count += 1;
    }
  });

  if (count == tArr.length) {
    let temp = -1;
    let result = indexArr.reduce(function (acc,ele){
        if(temp<0){
            temp = ele;
        } else {
            if(temp>=ele){
                acc = false;
            }else {
                temp = ele;
            }
        }
        return acc;
    },true);

    return result;
  }
  return false;
};


console.log(isSubsequence(s,t));
