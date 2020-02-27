class _LazyMan {
  constructor(name) {
    this.tasks = [];
    const task = () => {
      console.log(`name is ${name}`);
      this.next();
    };
    this.tasks.push(task);
    setTimeout(() => {
      this.next();
    }, 0);
  }

  next() {
    const task = this.tasks.shift();
    task && task();
  }

  sleep(second) {
    const task = () => {
      setTimeout(() => {
        console.log(`sleep ${second}s`);
        this.next();
      }, second * 1000);
    };
    this.tasks.push(task);
    return this;
  }
  sleepFirst(second) {
    const task = () => {
      setTimeout(() => {
        console.log(`sleep first ${second}s`);
        this.next();
      }, second * 1000);
    };
    this.tasks.unshift(task);
    return this;
  }
  eat(food) {
    const task = () => {
      console.log(`eat ${food}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
}

function LazyMan(name) {
  return new _LazyMan(name);
}
