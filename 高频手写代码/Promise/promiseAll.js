var promiseAll = function (args) {
  // console.log( typeof args);
  let arr = [...args];
  // console.log( typeof arr);
  let result = [];
  return new Promise((resolve, reject) => {
    arr.forEach((item) => {
      Promise.resolve(item)
        .then((res) => {
          result.push(res);
          if (arr.length === result.length) {
            resolve(result);
          }
        })
        .catch((reason) => {
          reject(reason);
        });
    });
  });
};
let promise1 = Promise.resolve(1);
let promise2 = Promise.resolve(2);
promiseAll([promise1, promise2, 333]).then((result) => {
  console.log(result);
});
