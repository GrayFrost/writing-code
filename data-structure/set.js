class Set {
  constructor() {
    this.items = {};
  }
  has(value) {
    return this.items.hasOwnProperty(value);
  }
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }
  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }
  get size() {
    return Object.keys(this.items).length;
  }
  get values() {
    return Object.keys(this.items);
  }
  // 并集
  union(otherSet) {
    const unionSet = new Set();
    this.values.forEach(value => unionSet.add(value));
    otherSet.forEach(value => unionSet.add(value));
    return unionSet;
  }
  // 交集
  intesection(otherSet) {
    const intersedtionSet = new Set();
    this.values.forEach(value => {
      if (otherSet.has(value)) {
        intersedtionSet.add(value);
      }
    });
    return intersedtionSet;
  }
}
