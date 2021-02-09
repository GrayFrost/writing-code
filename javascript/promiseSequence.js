const pa = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('pa');
      resolve();
    }, 1000)
  })
}

const pb = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('pb');
      resolve();
    }, 1000)
  })
}


const pc = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('pc');
      resolve();
    }, 1000)
  })
}

Promise.sequence = function(...promises){
  promises.reduce((prev, cur) => {
    return prev.then(cur)
  }, Promise.resolve())
}

Promise.sequence(pa, pb, pc);