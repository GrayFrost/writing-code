const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(fn){
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    function resolve(value){
      this.status = FULFILLED;
      this.value = value;
    }
    function reject(reason){
      this.status = REJECTED;
      this.reason = reason;
    }

    fn(resolve, reject);
  }
  then(){}
}