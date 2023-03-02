// 前方不重复，后方不重复，对应的就是唯一的那个值
// var singleNumber = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums.indexOf(nums[i], i + 1) === -1 && nums.indexOf(nums[i]) === i) {
//       return nums[i];
//     }
//   }
// };

// 二，利用题目中的
// “除了某个元素只出现一次以外，其余每个元素均出现两次”
// 进行异或运算,对所有的值进行异或运算之后就得到唯一的那个值

// 异或运算的规则
// a^a=0；自己和自己异或等于0
// a^0=a；任何数字和0异或还等于他自己
// a^b^c=a^c^b；异或运算具有交换律

var singleNumber = function (nums) {
  let ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    ans = ans ^ nums[i];
  }
  return ans;
};
