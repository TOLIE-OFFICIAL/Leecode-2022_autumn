// 1.三指针
var arithmeticTriplets = function (nums, diff) {
  let right = 2;
  let mid = 1;
  let left = 0;
  let res = 0;
  while (right < nums.length && mid < right && left < mid) {
    if (nums[right] - nums[mid] == diff && nums[mid] - nums[left] == diff) {
      res++;
      left++;
      mid = left + 1;
      right = mid + 1;
      continue;
    } else if (nums[right] - nums[mid] > diff) {
      mid++;
      right = mid + 1;
      continue;
    } else if (nums[mid] - nums[left] > diff) {
      left++;
      mid = left + 1;
      right = mid + 1;
      continue;
    }
    right++;
  }
  return res;
};

console.log(arithmeticTriplets([4,5,6,7,8,9], 2));
