// 原型继承
function Person1(){

}
function Student1(){}
Student1.prototype = new Person1();

// 构造函数继承
function Person2(name){

}
function Student2(name){
  Person2.call(this, name);
}

// 组合继承
function Person3(name){}
function Student3(name){
  Person3.call(this, name)
}
Student3.prototype = new Person3();

// 组合寄生继承
function Person4(name){

}
function Student4(name){
  Person4.call(this, name);
}
Student4.prototype = Object.create(Person4.prototype);
Student4.prototype.constructor = Student4;