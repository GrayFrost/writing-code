function clone(target) {
  if (target === null || typeof target !== "object") {
    return target;
  } else {
    let copy = Array.isArray(target) ? [] : {};
    for (let i in target) {
      copy[i] = clone(target[i]);
    }
  }
  return copy;
}
