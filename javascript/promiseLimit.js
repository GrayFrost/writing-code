class FetchLimit {
    constructor(max) {
        this.max = max;
        this.queue = [];
        this.curFetchCount = 0;
    }
    request(promise, ...args) {
        return new Promise((resolve, reject) => {
            let task = this.createTask(
                promise.bind(null, args),
                resolve,
                reject
            );
            if (this.curFetchCount >= this.max) {
                this.queue.push(task);
            } else {
                task();
            }
        });
    }
    createTask(promise, resolve, reject) {
        return () => {
            promise()
                .then((value) => resolve(value))
                .catch((err) => reject(err))
                .finally(() => {
                    this.curFetchCount--;
                    if (this.queue.length) {
                        let task = this.queue.shift();
                        task();
                    }
                });
            this.curFetchCount++;
        };
    }
}

function delay(time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Date.now()), time);
    });
}

const requestInstance = new FetchLimit(5);

let promises = [];
function test() {
    for (let i = 0; i < 15; i++) {
        let time = Math.random() * 2000;
        console.log("time", i, time);
        promises.push(
            requestInstance.request(delay, time).then(
                (result) => console.log("result", i, result),
                (error) => console.log(error)
            )
        );
    }
}

test();

// limit 2
function Scheduler(){
    this.list = [];
    this.add = function(promiseCreator){
      this.list.push(promiseCreator);
    }
    this.maxCount = 2;
  
    var tempRunIndex = 0;
    this.taskStart = function(){
      for(let i = 0; i < this.maxCount; i++){
        request.bind(this)();
      }
    }
  
    function request(){
      if(!this.list || !this.list.length || tempRunIndex >= this.maxCount){
        return;
      }
      tempRunIndex++;
      this.list.shift()().then(() => {
        tempRunIndex--;
        request.bind(this)()
      })
    }
  }
  let scheduler = new Scheduler();
  function timeout(time){
    return new Promise((resolve, reject) => setTimeout(resolve, time))
  }
  
  function addTask(time, order){
    scheduler.add(() => timeout(time).then(() => console.log(order)))
  }
  
  addTask(1000, 1);
  addTask(500, 2);
  addTask(300, 3);
  addTask(400, 4);
  
  scheduler.taskStart();