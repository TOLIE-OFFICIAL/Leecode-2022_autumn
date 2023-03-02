// 不能全部通过   思路是没问题的
// var merge = function (nums1, m, nums2, n) {
//   if (n === 0) {
//     return nums1;
//   }
//   if (m === 0) {
//     for (let i = 0; i < m + n; i++) {
//       nums1[i] = nums2[i];
//     }
//   }
//   while (m > 0 && n > 0) {
//     let len = m + n;
//     if (nums2[n - 1] >= nums1[m - 1]) {
//       nums1[len - 1] = nums2[n - 1];
//       n--;
//     } else {
//       nums1[len - 1] = nums1[m - 1];
//       m--;
//     }
//   }
//   return nums1;
// };
// [1,2,2,3,5,6]

var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;
  let last = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    if (nums1[m] >= nums2[n]) {
      [nums1[last], nums1[m]] = [nums1[m], nums1[last]];
      m--;
    } else {
      nums1[last] = nums2[n];
      n--;
    }
    last--;
  }
  return nums1;
};


console.log(merge([0], 0, [1], 1));
