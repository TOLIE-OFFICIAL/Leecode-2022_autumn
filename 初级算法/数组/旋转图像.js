// 1，先上下交换，在对角线交换
// var rotate = function (matrix) {
//   let len = matrix.length;
//   // 交换数组的上下部分
//   for (let i = 0; i < len / 2; i++) {
//     temp = matrix[i];
//     matrix[i] = matrix[len - 1 - i];
//     matrix[len - i - 1] = temp;
//   }
//   // 按装对角线进行交换
//   // 注意：避免重复交换同时避免对角线上的元素交换！！所以让 j = i + 1
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
//   }
// };

// 直接交换
// 一层一层的旋转，直到最后一层的内容为 1 或者 0
var rotate = function (matrix) {
  let len = matrix.length;
  // 交换数组的上下部分
  for (let i = 0; i < len / 2; i++) {
    temp = matrix[i];
    matrix[i] = matrix[len - 1 - i];
    matrix[len - i - 1] = temp;
  }
  // 按装对角线进行交换
  // 注意：避免重复交换同时避免对角线上的元素交换！！所以让 j = i + 1
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix);
console.log(matrix);
