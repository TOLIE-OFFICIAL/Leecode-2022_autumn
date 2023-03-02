// 主要思路就是每次打乱都是克隆一个新的数组并返回

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let res = this.nums.concat();
  let len = this.nums.length;

  for (let i = 0; i < len; i++) {
    let random = Math.floor(Math.random() * len) ;
    [res[i], res[random]] = [res[random], res[i]];
  }
  return res;
};