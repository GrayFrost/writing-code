class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  }
  append(val){
    const node = new Node(val);
    if(this.head === null){
      this.head = node;
    }else{
      let current = this.head;
      while(current){
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  insert(position, val){

  }
  findIndex(val){

  }
  remove(val){
    const position = this.findIndex(val);
    this.removeAt(position, val);
  }
  removeAt(position, val){


    this.length--;
  }
  get size(){
    return this.length;
  }
  isEmpty(){
    return this.length === 0;
  }
  print(){
    let str;
    if(this.head === null){
      return '';
    }else{
      let current = this.head;
      while(current){
        str = str + '' + current.val;
        current = current.next;
      }
      return str;
    }
  }
}