// 效果，传递一个数字代表时间，单位是ms
const sleep = function (time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

async function test() {
  console.log(111);
  await sleep(1000);
  console.log(222);
}
test();

// 实现一个 delay 函数格式如下，在 N 毫秒之后执行函数，并以函数结果作为返回值
// function delay(func, seconds, ...args) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       Promise.resolve(func(...args)).then(resolve);
//     }, seconds);
//   });
// }
function delay(func, seconds, ...args) {
  return new Promise((resolve) => {
    setTimeout(() => {
      Promise.resolve(func(...args)).then(resolve);
    }, seconds);
  });
}

function add(a, b) {
  return a + b;
}

// delay(add, 1000, 1, 2).then((res) => {
//   console.log(res);
// });
