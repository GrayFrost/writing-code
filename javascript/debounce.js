function debounce(fn, ms){
  let timeout;
  return function(){
    if(timeout){
      clearTimeout(timeout);
    }
    let args = arguments;
    timeout = setTimeout(() => {
      fn.call(this, ...args);
    }, ms);
  }
}