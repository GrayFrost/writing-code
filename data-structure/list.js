class List {
  constructor(){
    this.items = [];
  }
  push(item){
    this.items.unshift();
  }
  pop(){
    return this.items.pop();
  }
  isEmpty(){
    return this.items.length === 0;
  }
  get size(){
    return this.items.length;
  }
}