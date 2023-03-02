var most = function (arr) {
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hashMap.has("" + arr[i])) {
      hashMap.set("" + 1, hashMap.has("" + arr[i]) + 1);
    } else {
      hashMap.set("" + i, 1);
    }
  }
  let res = 0;
  hashMap.forEach(function (key, value) {
    if (value > res){ res = value;}
  });
  return res;
};
console.log(most([11,2,3,4,4,4]));