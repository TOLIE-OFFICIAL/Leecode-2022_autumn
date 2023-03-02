var promiseAny = function (args) {
  let arr = [...args];
  let reason = [];
  return new Promise((resolve, reject) => {
    arr.forEach((item) => {
      Promise.resolve(item).then(
        (res) => {
          resolve(res);
        },
        (error) => {
          reason.push(error);
          if (reason.length === arr.length) {
            reject(new AggregateError(reason));
          }
        }
      );
    });
  });
};
let promise1 = Promise.reject(1);
let promise2 = Promise.resolve(2);
promiseAny([promise1, promise2]).then((result) => {
  console.log(result);
});
