Function.prototype.myBind = function(context) {
  let obj = context || window;
  let arg1 = Array.prototype.slice.call(arguments, 1);
  let fn = this;
  let fBound = function() {
    let arg2 = Array.prototype.slice.call(arguments);
    return fn.apply(this instanceof fBound ? this : obj, arg1.concat(arg2));
  };
  fBound.prototype = this.prototype;
  return fBound;
};
