function curry(fn) {
  let args = [];
  return function next() {
    let arg1 = Array.prototype.slice.call(arguments);
    if (arg1.length > 0) {
      args.concat(arg1);
      return next;
    } else {
      fn.apply(null, args);
    }
  };
}
