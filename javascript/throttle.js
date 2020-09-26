// 节流
function throttle(fn, ms) {
  let timeout;
  return function() {
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(this, args);
        timeout = null;
      }, ms * 1000);
    }
  };
}

function throttle2(fn, ms){
  let prev = Date.now();
  return function(){
    let args = [...arguments];
    let now = Date.now();
    if(now - prev > ms * 1000){
      fn.apply(this, args);
      prev = now;
    }
  }
}
