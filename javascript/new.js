// new 的实现

function myNew(Fn, ...args) {
  const obj = new Object();
  obj.__proto__ = Fn.prototype;
  const result = Fn.call(obj, ...args);
  return typeof result === "object" ? result : obj;
}

function Person(name){
  this.name = name
}
const person = myNew(Person, 'gary');
console.log('I\'m ', person.name);

function Person2(name){
  this.name = name;
  return {
    str: 'hello melantha'
  }
}
const person2 = myNew(Person2, 'gary');
console.log(person2);
