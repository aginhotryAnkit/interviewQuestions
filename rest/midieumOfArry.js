let inArr = [0, 1, 2, 25, 100, 4, 6, 3];

const medianOfArr = (arr) => {
    arr.sort((a, b) => a - b);

    let length = arr.length;
    if (length % 2) {
        return (arr[length / 2 - 0.5])
    } else {
        return (arr[length / 2] + arr[(length / 2) - 1]) / 2
    }
}

console.log(medianOfArr(inArr));