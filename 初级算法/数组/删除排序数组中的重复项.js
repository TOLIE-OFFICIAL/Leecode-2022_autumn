// 关键是左侧指针先前进一步，再赋值
// 返回slow+1
var removeDuplicates = function (nums) {
  if (nums == null || nums.length === 0) return 0;
  let fast = 1;
  let slow = 0;
  while (fast < nums.length) {
    if (nums[fast] != nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
};
