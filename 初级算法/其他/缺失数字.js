// 效率低
// var missingNumber = function (nums) {
//   let n = nums.length;
//   for (let i = 0; i <= n; i++) {
//     if (nums.indexOf(i) === -1) return i;
//   }
// };

// console.log(undefined == 0); //false

// [].indexOf()

/**
 * 位运算求解
 *
 * a^a=0；自己和自己异或等于0
 * a^0=a；任何数字和0异或还等于他自己
 * a^b^c=a^c^b；异或运算具有交换律
 */

var missingNumber = function (nums) {
  let res = 0;
  for (let item of nums) {
    res ^= item;
  }
  for (let i = 0; i <= nums.length; i++) {
    res ^= i;
  }
  return res;
};

/**
 * 大神优化，绝了 JAVA
   public int missingNumber(int[] nums) {
      int xor = 0;
      for (int i = 0; i < nums.length; i++)
          xor ^= nums[i] ^ (i + 1);
      return xor;
  }
*/

// 求数列和
function add(arr) {
  return arr.reduce((prev, next) => {
    return prev + next;
  }, 0);
}
var missingNumber = function (nums) {
  let n = nums.length;
  // 首项加尾项除于2，乘以项数，求0~n的和
  let res = ((0 + n) / 2) * (n + 1) - add(nums);
  return res;
};

console.log(missingNumber([0, 1, 2]));

// console.log(5^5);
