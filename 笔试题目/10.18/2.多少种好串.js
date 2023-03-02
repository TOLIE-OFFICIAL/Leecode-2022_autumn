var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

function plus(str) {
  let num = Number(str);
  let res = 1;
  while (num) {
    res *= num;
    num--;
  }
  return res;
}

rl.on("line", function (line) {
  let arr = line.split("");
  let map = new Map();
  let res = 1;
  arr.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });
  let copyed = [];
  let len = 0;
  map.forEach((value, key) => {
    if (value === 1) len++;
    else {
      copyed.push({
        key,
        value,
      });
    }
  });
  if (len) {
    res = plus(len);
    copyed.forEach((item) => {
      res *= plus(len + 1) / (plus(item.value) * plus(len + 1 - item.value));
      len = len + item.value;
    });
    console.log(res);
  } else {
    let temp = copyed.shift().value;
    let res =0;
    if (copyed.length) {
      res = 1;
      copyed.forEach((item) => {
        res *=
          plus(temp + 1) / (plus(item.value) * plus(temp + 1 - item.value));
        temp = temp + item.value;
      });
    }
    console.log(res);
  }
});
