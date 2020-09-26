function deepClone(source, hash = new WeakMap()) {
  if (!isObject(source)) {
      return source;
  }
  if (hash.has(source)) {
      return hash.get(source);
  }
  let target = Array.isArray(source) ? [] : {};
  hash.set(source, target);
  for (let key in source) {
      target[key] = isObject(source[key])
          ? deepClone(source[key], hash)
          : source[key];
  }
  return target;
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

// 示例测试
let obj = { a: "hello", b: { c: "world" } };
obj.d = obj;
let obj2 = deepClone(obj);
obj2.b.c = "nihao";
console.log(obj2);