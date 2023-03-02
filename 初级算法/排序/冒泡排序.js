// 第一轮将最小/最大的项移动到最左/右侧
var Maopao = function (nums) {
  let len = nums.length;
  let fast = 1;
  let slow = 0;
  while (slow < len && fast < len) {
    // 这里是小于号将最小的放在左侧，改成大于号就将最大的放在左侧
    if (nums[fast] > nums[slow]) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
    }
    fast++;
    // 一轮循环的最后一次比较结束之后
    // 将slow加1,fast指向slow加完1的下一个位置
    if (fast == len) {
      slow++;
      fast = slow + 1;
    }
  }
  return nums;
};

console.log(Maopao([20, 413, 3, 53, 90, 324]));
