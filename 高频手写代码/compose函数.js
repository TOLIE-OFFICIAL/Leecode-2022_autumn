function compose(...args) {
  return function fn(num) {
    return args.reduce((prev, next) => {
      if (Object.prototype.toString.call(prev) !== "[object Function]") {
        return next(prev);
      }
    }, num);
  };
}

function a(a) {
  console.log(a + "aaa");
  return a + 1;
}
function b(b) {
  console.log(b + "bbb");
  return b * 10;
}
function c(c) {
  console.log(c + "ccc");
  return c - 1;
}

console.log(compose(a, b, c)(10));
