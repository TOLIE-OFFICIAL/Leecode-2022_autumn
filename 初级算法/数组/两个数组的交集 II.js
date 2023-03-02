// 直接比较,遍历第一个数组，如果也在第二个数组里
// 将这个内容存入res,并将第二个数组中对应的内容设置为null

// 执行用时：60 ms, 在所有 JavaScript 提交中击败了87.92% 的用户
// 内存消耗：41.3 MB, 在所有 JavaScript 提交中击败了93.28% 的用户
// var intersect = function (nums1, nums2) {
//   let res = [];
//   let index = null;
//   for (let i of nums1) {
//     index = nums2.indexOf(i);
//     if (index != -1) {
//       res.push(i);
//       nums2[index] = null;
//     }
//   }
//   return res;
// };

// 先排序再双指针对比
// 执行用时：52 ms, 在所有 JavaScript 提交中击败了99.01% 的用户
// 内存消耗：41.7 MB, 在所有 JavaScript 提交中击败了67.51% 的用户
var intersect = function (nums1, nums2) {
  nums1.sort(function (a, b) {
    return a - b;
  }); //升序排列
  nums2.sort(function (a, b) {
    return a - b;
  }); //升序排列
  console.log(nums1, nums2);
  let left = 0;
  let right = 0;
  let res = [];
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] === nums2[right]) {
      res.push(nums1[left]);
      left++;
      right++;
    } else if (nums1[left] > nums2[right]) {
      right++;
    } else {
      left++;
    }
  }
  return res;
};

intersect([1, 2, 2, 1], [2, 2]);
