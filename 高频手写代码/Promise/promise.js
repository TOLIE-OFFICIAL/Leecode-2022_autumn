const promise1 = Promise.resolve(123);
console.log(promise1);
promise1.then((val) => {
  console.log(val);
});

var promise = new Promise((resolve, reject) => {
  resolve(3);
  reject(4);
  resolve(2);
});
promise.then(
  (val) => {
    console.log(val);
  },
  (reson) => {
    console.log(reson);
  }
); // 4
// 原因是每个promise都有三种状态，待定，成功，失败
// 而且一旦promise的状态确定了，就不会再发生改变
// 所以上面代码中reject(4)及其之后的resolve都被忽略了

