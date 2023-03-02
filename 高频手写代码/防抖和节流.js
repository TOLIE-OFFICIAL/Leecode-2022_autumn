const input = document.querySelector("#input");
// 一、防抖
// 重点在于清零，定时器清零
// 在一定时间内只执行一次，每次执行都会结束上次的任务，开始一个新的
// 只执行最后一次

function debounce(fn, wait) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, wait);
  };
}

// input.oninput = debounce(function () {
//   console.log(1111);
// }, 500);

// 二、节流
// 节流的重点在于 加锁关锁
// 在一定时间内只执行第一次，不受别的操作影响
// 只执行第一次

function throttle(fn, wait) {
  let timer;
  return (...args) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, wait);
  };
}
