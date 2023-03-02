var promiseAny = function (args) {
  let arr = [...args];
  return new Promise((resolve, reject) => {
    arr.forEach((item) => {
      Promise.resolve(item).then(
        (res) => {
          resolve(res);
        },
        (error) => {
          reject(error);
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
