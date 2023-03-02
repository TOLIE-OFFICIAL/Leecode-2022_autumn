// 利用indexOf的第二个参数
// 如果后续存在重复，返回true
// 反之继续比对直至比对结束
// var containsDuplicate = function (nums) {
//   let length = nums.length;
//   for (let i = 0; i < length; i++) {
//     if (nums.indexOf(nums[i], i + 1) != -1) return true;
//   }
//   return false;
// };

// 方案二，利用Map
// map.has返回一个boolean值，是否包含某一项
var containsDuplicate = function (nums) {
  let map = new Map();
  for (let i of nums) {
    if (map.has(i)) {
      return true;
    }
    map.set(i, 1);
  }
  return false;
};
