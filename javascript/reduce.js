Array.prototype.myReduce = function(callback, init){
  const arr = this;
  let res;
  let startIndex = 0;
  if(init){
    res = init;
  }else{
    res = arr[0];
    startIndex = 1;
  }
  
  for(let i = startIndex; i < arr.length; i++){
    res = callback.call(null, res, arr[i], i, arr);
  }
  return res;
}