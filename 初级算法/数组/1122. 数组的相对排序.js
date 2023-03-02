// 哈希，排序, map会按照插入顺序进行排序

// var relativeSortArray = function (arr1, arr2) {
//   let hashMap = new Map();
//   // arr1升序排列
//   arr1 = arr1.sort(function (a, b) {
//     return a - b;
//   });
//   for (let i = 0; i < arr1.length; i++) {
//     if (!hashMap.has(arr1[i])) {
//       hashMap.set(arr1[i], 1);
//     } else hashMap.set(arr1[i], hashMap.get(arr1[i]) + 1);
//   }
//   // 清空arr1
//   arr1 = [];
//   for (let i = 0; i < arr2.length; i++) {
//     let num = hashMap.get(arr2[i]);
//     hashMap.delete(arr2[i]);
//     arr1 = arr1.concat(new Array(num).fill(arr2[i]));
//   }
//   for (let [key, value] of hashMap) {
//     arr1 = arr1.concat(new Array(value).fill(key));
//   }
//   return arr1;
// };

// 相同思路，但不用map保存出现的次数

var relativeSortArray = function (arr1, arr2) {
  let len = Math.max(...arr1) + 1;
  let countList = new Array(len).fill(0);
  for (let i = 0; i < arr1.length; i++) {
    ++countList[arr1[i]];
  }

  // 清空arr1
  arr1 = [];
  for (let i = 0; i < arr2.length; i++) {
    let num = countList[arr2[i]];
    countList[arr2[i]] = 0;
    arr1 = arr1.concat(new Array(num).fill(arr2[i]));
  }
  for (let i in countList) {
    if (countList[i] != 0) {
      arr1 = arr1.concat(new Array(countList[i]).fill(i));
    }
  }
  return arr1;
};

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr2 = [2, 1, 4, 3, 9, 6];
console.log(relativeSortArray(arr1, arr2));
// relativeSortArray(arr1, arr2);
