const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(fn) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallback = [];
    this.onRejectedCallback = [];

    function resolve(value) {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallback.forEach(fn => {
          fn();
        });
      }
    }
    function reject(reason) {
      if (this.status === REJECTED) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallback.forEach(fn => {
          fn();
        });
      }
    }

    try {
      fn(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        onFulfilled(this.value);
      }
      if (this.status === REJECTED) {
        onRejected(this.reason);
      }
      if (this.status === PENDING) {
        this.onResolvedCallback.push(() => {
          onFulfilled(this.value);
        });
        this.onRejectedCallback.push(() => {
          onRejected(this.reason);
        });
      }
    });
    return promise2;
  }
}

MyPromise.resolve = function(value) {
  return new MyPromise((resolve, reject) => {
    resolve(value);
  });
};
MyPromise.reject = function(error) {
  return new MyPromise((resolve, reject) => {
    reject(error);
  });
};
MyPromise.race = function(promises) {
  return new MyPromise((resolve, reject) => {
    promises.forEach(promise => {
      resolve(promise);
    });
  });
};
