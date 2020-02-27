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
