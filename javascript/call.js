Function.prototype.myCall = function(context, ...args) {
  const obj = context || window;
  const fn = Symbol();
  obj[fn] = this;
  const result = obj[fn](...args);
  delete obj[fn];
  return result;
};

Function.prototype.myCall2 = function(context) {
  const obj = context || window;
  let args = [];
  for (var i = 0; i < arguments.length; i++) {
    args.push(`arguments[${i}]`);
  }
  obj.fn = this;
  let result = eval(`obj.fn(${args})`);
  delete obj.fn;
  return result;
};

function Person(age) {
  console.log(this.name, age);
}
const person = {
  name: "gary"
};
Person.myCall(person, 26);
