/*一、不论传入多少参数，返回他们的和
    sum(1, 2, 3) + sum(4, 5);=> 15
*/
// function sum(...args) {
//   //  解构赋值 ，这里的args是一个数组
//   console.log(Array.isArray(args)); //true
//   return args.reduce((prev, curr) => {
//     return prev + curr;
//   }, 0);
// }

// console.log(sum(1, 2, 3) + sum(4, 5));

/* 二
    sum(1)(2)(3)(4).valueOf() => 10
*/
// 方式一、容易理解一些
// function sum(...args) {
//   //   allArgs保存所有传入的参数
//   let allArgs = args;
//   function fn(...args2) {
//     allArgs = allArgs.concat(args2);
//     return fn; // 把fn自己返回出来
//   }

//   fn.valueOf = function () {
//     return allArgs.reduce((prev, curr) => {
//       return prev + curr;
//     }, 0);
//   };
//   // 返回添加过valueOf方法的函数
//   return fn;
// }

// 方式二
/**/

function sum(...args) {
  console.log(111);
  // 当箭头函数的函数体只有一个 `return` 语句时，
  // 可以省略 `return` 关键字和方法体的花括号
  const f = (...rest) => {
// 这里函数f并未执行只是将他保存起啦，当调用f的时候
// 也就是执行到sum(1)(2)的时候f函数才第一次调用

    // console.log(args, "args");
    // console.log(rest);
    // console.log(222);
    return sum(...args, ...rest);
  };
  // console.log(333);
  // console.log(rest);
  f.valueOf = () => args.reduce((x, y) => x + y, 0);
  return f;
}

// 总结就是把所有的参数用某种方式保存到一起，然后在进行求和运算
console.log(sum(1)(2)(3)(4).valueOf());

// function test(a,b,c,d) {}
// console.log(test.length); // =>4
