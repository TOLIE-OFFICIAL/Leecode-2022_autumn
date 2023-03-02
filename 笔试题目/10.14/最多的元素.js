function getMost(arr) {
  let map = new Map();
  for (let item of arr) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  let min = Number.MIN_SAFE_INTEGER;
  let res = null;
  map.forEach((val, key) => {
    // console.log(val, key);
    // res = res < item ? item : res;
    if (val > min) {
      min = val;
      res = key;
    }
  });
  return res;
}

console.log(getMost(["a", "b", "c", "a"]));
