// 寻找arr中大于num的最小数字，num不一定在数组里面

// 二分查找
const getBig = function (arr, num) {
  let right = arr.length - 1;
  let left = 0;
  if (arr[right] === num) return arr[0];
  while (right >= left) {
    let mid = Math.floor((right - left) / 2);
    if (arr[mid] < num) {
      // 边界条件
      if (arr[mid + 1] > num) {
        return arr[mid + 1];
      }
      left = mid + 1;
    } else if (arr[mid] > num) {
      // 边界条件
      if (arr[mid - 1] <= num) {
        return arr[mid];
      }
      right = mid;
    } else {
      // 边界条件
      return arr[mid + 1];
    }
  }
};
console.log(getBig([5, 11, 12, 15, 20, 100], 13));
