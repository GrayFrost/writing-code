// 插入排序
function insertSort(arr){
  const length = arr.length;
  let j, current;
  for(let i = 1; i < length; i++){ // 默认第一个已排序
    j = i;
    current = arr[i];
    while(j > 0 && arr[j - 1] > current){
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = current;
  }
  return arr;
}

const arr = [1, 4, 5, 6, 2, 3, 7, 9, 8];
console.log("insert", insertSort(arr));