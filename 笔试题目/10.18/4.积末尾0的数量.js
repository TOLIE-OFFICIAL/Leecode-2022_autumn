var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
const arr = [];
rl.on("line", function (line) {
  arr.push(line.split("").map((item) => Number(item)));
});
rl.on("close", function () {

// const arr = [
//   [5, 2],
//   [3, 5, 50, 2, 80],
// ];

let res = 0;
let [len, num] = arr.shift();
let numArr = arr.shift();
console.log(len,num,numArr);
if (len !== 1) {
  let left = 0;
  let right = 1;
  // numArr[i]
  while (left < len && right < len) {
    if ((numArr[left] * numArr[right]) % (10 ** num)===0) {
      res++;
    }
    right++;
    if (right === len) {
      left++;
      right = left + 1;
    }
  }
}
console.log(res);
});
