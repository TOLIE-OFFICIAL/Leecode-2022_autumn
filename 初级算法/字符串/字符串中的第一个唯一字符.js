// 第一遍先统计每个字符出现的次数，
// 第二遍再次从前往后遍历字符串s中的每个字符，
// 如果某个字符出现一次直接返回，原理比较简单，
// var firstUniqChar = function (s) {
//   let hashmap = new Map();
//   for (let i of s) {
//     if (!hashmap.has(i)) {
//       hashmap.set(i, 1);
//     } else {
//       hashmap.set(i, -1);
//     }
//   }
//   for (let i = 0; i < s.length; i++) {
//     if (hashmap.get(s[i]) == 1) {
//       return i;
//     }
//   }
//   return -1;
// };

// 二、队列   ！！！小技巧是 「延迟删除」！！
var firstUniqChar = function (s) {
  let map = new Map(); // 用来判断是否读到过对应的字符
  let queue = []; // 用来输出下标
  for (let [index, val] of Array.from(s).entries()) {
    // 第一次出现
    if (!map.has(val)) {
      map.set(val, index);
      queue.push([val, index]);
    } else {
      // 不是第一次出现
      map.set(val, -1);
      while (queue.length != 0 && map.get(queue[0][0]) === -1) {
        queue.shift();
      }
    }
  }
  // console.log(queue, map);
  // 结束之后队列为空说明没有不重复出现的字符。反之输出队列顶部的字符
  return queue.length ? queue[0][1] : -1;
};

console.log(firstUniqChar("loveleetcode"));
