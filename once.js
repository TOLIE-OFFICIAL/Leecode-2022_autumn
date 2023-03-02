const once = function () {
  let flag = true;
  let res = null;
  return (...args) => {
    if (flag) {
      res = args.reduce((prve, next) => {
        return prve + next;
      }, 0);
      flag = false;
    }
    return res;
  };
};


let fn = once();
console.log(fn(1,2,3));
console.log(fn(2,3,4));
