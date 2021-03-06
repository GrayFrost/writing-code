// instanceof 原理
function myInstanceOf(obj, con) {
  let left = Object.getPrototypeOf(obj);
  let right = con.prototype;
  while (true) {
    if (left === null) {
      return false;
    } else {
    }
    if (left === right) {
      return true;
    }
    left = Object.getPrototypeOf(left);
  }
}

// 示例测试
function A() {}

function B() {}
let a = new A();
console.log(myInstanceOf(a, B));
