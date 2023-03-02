function delivery(order) {
  let target = order.length;
  let arr = getArr(order);
  console.log(arr);
  let queue = [[0, 0]];
  let path = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      // console.log(cur);

      if (arr[cur[0]][cur[1]]) {
        arr[cur[0]][cur[1]] = 0;
        target--;
      }
      if (target === 0) return path;
      else {
        if (cur[0] + 1 < arr.length - 1) {
          queue.push([cur[0] + 1, cur[1]]);
        }
        if (cur[0] - 1 >= 0) {
          queue.push([cur[0] - 1, cur[1]]);
        }
        if (cur[1] + 1 < arr[0].length - 1) {
          queue.push([cur[0], cur[1] + 1]);
        }
      }
    }
    path++;
  }
  return path;
}

function getArr(order) {
  // 转矩阵
  let max_X = 0;
  let max_Y = 0;
  for (let item of order) {
    max_X = item[0] > max_X ? item[0] : max_X;
    max_Y = item[1] > max_Y ? item[1] : max_Y;
  }
  let arr = new Array(max_X + 1).fill();
  for (let i = 0; i < max_X + 1; i++) {
    arr[i] = new Array(max_Y + 1).fill(0);
  }
  for (let item of order) {
    arr[item[0]][item[1]] = 1;
  }
  return arr;
}

// function robot(arr, path, x, y, target) {
//   if (target === 0) return path;
//   if (x < 0 || x > arr.length - 1 || y > arr[0].length - 1) return Infinity;
//   // console.log(arr);
//   console.log(x, y);
//   if (arr[x][y] === 1) {
//     arr[x][y] = 0;
//     target--;
//   }
//   return Math.min(
//     robot(arr, path++, x + 1, y, target),
//     robot(arr, path++, x, y + 1, target),
//     robot(arr, path++, x - 1, y, target)
//   );
// }

delivery([
  [1, 1],
  [1, 2],
  [2, 2],
  [1, 3],
  [3, 3],
]);
