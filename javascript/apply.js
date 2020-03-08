Function.prototype.myApply = function(context, args) {
  const obj = context || window;
  const fn = Symbol();
  obj[fn] = this;
  const result = obj[fn](...args);
  delete obj[fn];
  return result;
};

function Person(age, gender) {
  console.log(this.name, age, gender);
}
const person = {
  name: "gary"
};
Person.myApply(person, [26, "male"]);
