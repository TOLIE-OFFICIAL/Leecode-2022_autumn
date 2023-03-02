// 双指针
// 这个效率一般
// var reverseString = function (s) {
//     let left = 0;
//     let temp = null;
//     let right = s.length - 1;
//     while (right > left) {
//       temp = s[left];
//       s[left] = s[right];
//       s[right] = temp;
//       right--;
//       left++;
//     }
//   };

// 这个效率高
var reverseString = function (s) {
  let temp = null;
  let len = s.length;
  for (let left = 0, right = len - 1; left < right; left++, right--) {
    temp = s[left];
    s[left] = s[right];
    s[right] = temp;
  }
};
