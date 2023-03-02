// 双指针
// var moveZeroes = function (nums) {
//   let slow = 0;
//   let fast = 0;
//   while (fast < nums.length) {
//     if (nums[fast] != 0) {
//       [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
//       slow++;
//     }
//     fast++;
//   }
// };

// 单指针(也还是双指针，i和j)
var moveZeroes = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
};
