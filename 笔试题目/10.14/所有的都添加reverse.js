function reverse(str) {
  // const fakeReverse = function (str) {
    const arr = str.trim().split("");
    let left = 0,
      right = arr.length;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    return arr.join("");
  };
  // String.prototype.reverse = fakeReverse;
// }
