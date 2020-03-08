// 数组扁平化
function flatten(arr) {
  return arr
    .toString()
    .split(",")
    .map(item => +item);
}

function flatten2(arr, depth = 1) {
  if (depth < 1) {
    return arr;
  }
  if (depth === 1) {
    return arr.reduce((prev, cur) => {
      return prev.concat(cur);
    }, []);
  } else {
    return arr.reduce((prev, cur) => {
      return prev.concat(Array.isArray(cur) ? flatten2(cur, depth - 1) : cur);
    }, []);
  }
}
