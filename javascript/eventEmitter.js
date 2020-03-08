// event emitter
class Event {
  constructor() {
    this.events = {};
  }
  on(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(cb);
  }
  emit(event, ...args) {
    if (!this.events[event]) {
      return;
    }
    this.events[event].forEach((fn, index) => {
      fn.call(this, ...args);
    });
  }
  off(event, fn) {
    if (!this.events[event]) {
      return;
    }
    this.events[event] = this.events[event].filter(item => {
      return item !== fn;
    });
  }
  once(event, fn) {
    const only = () => {
      fn.apply(this, arguments);
      this.off(event, only);
    };
    this.on(event, only);
  }
}
