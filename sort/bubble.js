// 冒泡排序
function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr);
            }
        }
    }
    return arr;
}

const arr = [1, 4, 5, 6, 2, 3, 7, 9, 8];
console.log("bubble", bubbleSort(arr));