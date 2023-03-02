const num = Number(readline());
const hashMap = new Map();
let res = []
for (let i = 0; i < num; i++) {
  let cur = readline().split(" ");
  cur[1] = Number(cur[1]);
  if (hashMap.has(cur[0])) {
    if (hashMap.get(cur[0]) < cur[1]) {
      hashMap.delete(cur[0]);
      hashMap.set(cur[0], cur[1]);
    }
  } else {
    hashMap.set(cur[0], cur[1]);
  }
}
hashMap.forEach((value, key) => {});

function getNum(str) {
  return str.split(" ").map((item) => Number(item));
}


/****
 * 
 * const num = Number(readline());
const hashMap = new Map();
let res = [];
for (let i = 0; i < num; i++) {
  let cur = readline().split(" ");
  cur[1] = Number(cur[1]);
  if (!res.length)
    res.push({
      key: cur[0],
      weight: cur[1],
    });
  let top = res[res.length - 1];
  if (top.weight > cur[1]) {
  }
}
// hashMap.forEach((value, key) => {});

// function getNum(str) {
//   return str.split(" ").map((item) => Number(item));
// }

// 二分查找寻找index
// function dividSear(arr, num) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] > num) {
//       right = mid;
//     } else if (arr[mid] < num) {
//       if (arr[mid + 1] > num) return mid;
//       left = mid;
//     } else {
//       return mid - 1;
//     }
//   }
// }

 */