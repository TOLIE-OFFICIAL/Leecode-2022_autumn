let str = readline();
// let str = "2 1 4 3 6 5 0 7 3";
let arr = str.split(" ").map((item) => Number(item));
let times = arr.pop();
let temp = times;
let big = Math.max(arr[0], arr[1]);
while (temp) {
  let left = arr.shift();
  let right = arr.shift();
  if (big !== Math.max(left, right) || left === right) {
    big = Math.max(left, right);
    temp = times - 1;
  } else {
    --temp;
  }
  arr.unshift(big);
  arr.push(Math.min(left, right));
}
console.log(big);
