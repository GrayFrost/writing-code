// 快速排序
function quickSort(arr) {
    let length = arr.length;
    if (length < 2) {
        return arr;
    }
    const pivot = Math.floor(Math.random() * length);
    let minArr = [],
        maxArr = [];
    for (let i = 0; i < length; i++) {
        if (arr[i] < arr[pivot] && i !== pivot) {
            minArr.push(arr[i]);
        } else if (arr[i] >= pivot && i !== pivot) {
            maxArr.push(arr[i]);
        }
    }
    return [...quickSort(minArr), arr[pivot], ...quickSort(maxArr)];
}

const arr = [1, 4, 5, 6, 2, 3, 7, 9, 8];
console.log("quick 1", quickSort(arr));
