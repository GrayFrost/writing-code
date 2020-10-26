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

// review
class Limit {
    constructor(max) {
        this.max = 2;
        this.queue = [];
        this.count = 0;
    }
    request(promise, ...args) {
        return new Promise((resolve, reject) => {
            let task = this.createTask(
                promise.bind(null, args),
                resolve,
                reject
            );
            if (this.count >= this.max) {
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
                .catch((error) => reject(error))
                .finally(() => {
                    this.count--;
                    if (this.queue.length) {
                        let task = this.queue.shift();
                        task();
                    }
                });
            this.count++;
        };
    }
}
