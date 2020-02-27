class Event {
  constructor(){
    this.events = {}
  }
  on(event, cb){
    if(!this.events[event]){
      this.events[event] = [];
    }
    this.events[event].push(cb);
  }
  emit(event, ...args){
    if(!this.events[event]){
      return;
    }
    this.events[event].forEach((fn, index) => {
      fn.call(this, ...args);
    })
  }
  off(event, fn){
    // TODO: 
  }
  once(event, fn){
    
  }
}