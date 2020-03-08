// 防抖
function debounce(fn, ms) {
  let timeout;
  return function() {
    let context = this;
    let args = arguments;
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function() {
      fn.apply(context, args);
    }, ms);
  };
}
