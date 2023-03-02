var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;
    while (right != left) {
      let mid = Math.floor((left + right) / 2);
      // 中间值判断，是错误版本，则第一个错误版本是他之前或者他自己
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        // 不是错误版本，那么第一个错误版本就是他之后的，不可能是他自己
        left = mid + 1;
      }
    }
    // 最后的结果一定是  right === left
    return right;
  };
};
