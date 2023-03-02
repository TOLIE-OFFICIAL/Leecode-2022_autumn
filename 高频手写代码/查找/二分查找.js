const divid = function (arr, target) {
  if (!arr || !arr.length) return -1; // 边界判断
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid;
    } else if (arr[mid] < target) {
      left = mid;
    } else {
      return mid;
    }
  }
  return -1;
};
console.log(divid([1, 2, 3, 4, 55], 4));
