const processArr = function (arr) {
  arr = myFlat(arr);
  let set = new Set(arr);
  arr = [...set];
  return arr.sort((a, b) => {
    return a - b;
  });
};

var myFlat = function (arr, deep = 1) {
  return deep != 0
    ? arr.reduce((prev, curr) => {
        return prev.concat(Array.isArray(curr) ? myFlat(curr) : curr);
      }, [])
    : arr;
};

const arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10,
];
console.log(processArr(arr));