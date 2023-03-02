var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  let [str, right] = line.split(" ");
  arr = str.split("");
  let left = 0;
  while (left < right-1) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  while (arr[0] === "0") {
    arr.shift();
  }
  console.log(Number(arr.join("")));
});
