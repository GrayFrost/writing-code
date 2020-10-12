// 归并排序
function mergeSort(arr) {
    const length = arr.length;
    if (length < 2) {
        return arr;
    }
    let mid = Math.floor(length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    const newResult = result.concat(left.length ? left : right);
    return newResult;
}

const arr = [1, 4, 5, 6, 2, 3, 7, 9, 8];
console.log("merge", mergeSort(arr));
