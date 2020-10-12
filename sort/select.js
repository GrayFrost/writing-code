// 选择排序
function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

function selectSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        let min = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(i, min, arr);
    }
    return arr;
}

const arr = [1, 4, 5, 6, 2, 3, 7, 9, 8];
console.log("select", selectSort(arr));
