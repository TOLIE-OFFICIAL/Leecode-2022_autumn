// 可以组成三角形的数量---暴力破解
let arr = [1, 2, 3, 4, 5, 6, 7, 9];
let pluSelf = arr.map((item) => item ** 2);
console.log(pluSelf);
const len = arr.length;
if (!len || len < 3) {
  console.log(0);
} else if (arr[0] ** 2 + arr[1] ** 2 > arr[len - 1] ** 2) {
  console.log(0);
} else {
  arr = arr.sort((a, b) => {
    return a - b;
  });
  // console.log(arr);

  let left = 0,
    right = 1;
}

// // 二分查找目标值的下标，或者大于目标值的最小值的下标
// function diviSearch(arr, num) {
//   let right = arr.length - 1;
//   let left = 0;
//   // console.log(left,right);
//   if (arr[right] < num) return -1;
//   while (right >= left) {
//     // console.log(111);
//     console.log(left, right);
//     let mid = Math.floor((right - left) / 2);
//     if (arr[mid] < num) {
//       // 边界条件
//       if (arr[mid + 1] > num) {
//         return mid + 1;
//       }
//       left = mid + 1;
//     } else if (arr[mid] > num) {
//       // 边界条件
//       if (arr[mid - 1] <= num) {
//         return mid;
//       }
//       right = mid;
//     } else {
//       // 边界条件
//       return mid + 1;
//     }
//   }
// }

// // console.log(diviSearch([1, 2, 3, 9, 10, 11], 8));
