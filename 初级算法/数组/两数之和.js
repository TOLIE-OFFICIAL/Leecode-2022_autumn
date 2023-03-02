// 一、利用array的indexOf API直接查找有没有和为target的
// var twoSum = function (nums, target) {
//   let d = null;
//   let index = null;
//   for (let i = 0; i < nums.length; i++) {
//     d = target - nums[i];
//     index = nums.indexOf(d, i + 1);
//     if (index != -1) {
//       return [i, index];
//     }
//   }
// };

// 二、双指针
var twoSum = function (nums, target) {
  let fast = 1;
  let slow = 0;
  while (fast < nums.length && slow < nums.length) {
    if (nums[fast] + nums[slow] == target) return [slow, fast];
    if (fast == nums.length - 1) {
      slow++;
      fast = slow + 1;
    } else {
      fast++;
    }
  }
};
// 三、哈希表
// var twoSum = function (nums, target) {
//   let hashmap = new hashmap();
//   let diff = null;
//   for (let i = 0; i < nums.length; i++) {
//     diff = target - nums[i];
//     if (!hashmap.has(diff)) {
//       // 如果表里没有diff,说明前面没有值与nums[i]相加为target
//       // 将其存入hashmap中
//       hashmap.set(nums[i], i);
//     } else {
//       // 有diff说明前面有一个值，与nums[i]相加为target
//       return [hashmap.get(diff), i];
//     }
//   }
// };

console.log(twoSum([2, 5, 5, 11], 10));
// twoSum([2, 7, 11, 15], 9);
