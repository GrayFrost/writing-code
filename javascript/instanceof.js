// instanceof 原理
function myInstanceOf(left, right){
  while(left){
    if(left === right.prototype){
      return true;
    }
    left = left.__proto__
  }
  return false;
}

function A(){

}

function B(){}
let a = new A();
console.log(myInstanceOf(a, B));