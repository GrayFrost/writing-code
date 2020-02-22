class Event {
  constructor(){
    this.items = {}
  }
  on(key, fn){
    if(!this.items.hasOwnProperty(key)){
      this.items[key] = [fn];
    }
    this.items[key].push(fn);
  }
  emit(key){
    if(!this.items.hasOwnProperty(key)){
      return;
    }
    this.items[key].forEach((fn, index) => {
      fn();
    })
  }
  off(key, fn){
  }
  once(){}
}