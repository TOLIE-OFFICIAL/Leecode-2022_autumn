var fastSortList = function (arr) {
  const len = arr.length;
  const left = 0,
    right = arr.length - 1;
  let key = arr[0];
  let l = left,
    r = right;
  while (arr[l] < key && l < len) {
    l++;
  }
  while (arr[r] > key && r >= 0) {
    r++;
  }
  [arr[l], arr[r]] = [arr[r], arr[l]];
};

console.log(fastSortList([10, 9, 7, 6, 4, 3, 2, 1]));
