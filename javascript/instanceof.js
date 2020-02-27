// instanceof 原理
function myInstanceOf(obj, con) {
  let left = obj.__proto__;
  let right = con.prototype;
  while (true) {
    if (left === null) {
      return false;
    } else {
    }
    if (left === right) {
      return true;
    }
    left = left.__proto__;
  }
}

function A() {}

function B() {}
let a = new A();
console.log(myInstanceOf(a, B));
