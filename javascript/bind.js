Function.prototype.myBind = function(context){
  let obj = context || window;
  let arg1 = Array.prototype.slice.call(arguments, 1);
  let fn = this;
  
}