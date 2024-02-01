const objArr = [
    { id: 1, name: "Bob" },
    { id: 2, name: "Harry" },
    { std1:"ankit", std2:"kajal",std3:"sdsd"},
];

// Output
// {'1': 'Bob', '2': 'Harry'}

// let result = {};
// objArr.map((current, index) => {
//     result[current.id] = current.name
// });
// console.log(result);



let ValueObj = {};

Object.keys(objArr).map(function (ele){
    if(objArr[ele].constructor === Object){
        var temp = "";
        Object.keys(objArr[ele]).map(function (ele1){
            if(ele<Object.keys(objArr[ele]).length){
                // (even==0)?even=0:++even;
                if(temp!=""){
                    ValueObj[temp] = objArr[ele][ele1];
                }
                temp = objArr[ele][ele1];
            }
        });
        temp = "";
    }
});

console.log(ValueObj);

// function returnKeysAndValues(objArr={}){
//     var priviousKey = "";
//     for (let i = 0; i < Object.keys(objArr).length; i++) {
//         if(objArr[i].constructor === Object){
//             // for
//         } else {
//             console.log("this is an array");
//         }
//     }
// }



// // returnKeysAndValues(objArr);
// // console.log(Object.keys);