// 一、内置API  revers
// 二，双指针
var reverse = function (arr) {
  let fast = arr.length - 1;
  let slow = 0;
  while (fast >= slow) {
    arr[fast] = [arr[slow], (arr[slow] = arr[fast])][0];
    fast--;
    slow++;
  }
  return arr;
};
// 利用栈
// var reverse = function(arr){
//   let stack = arr;
//   arr = [];
//   while(stack.length){
//     arr.push(stack.pop())
//   }
//   return arr;
// }

console.log(reverse([1, 2, 3, 4]));
