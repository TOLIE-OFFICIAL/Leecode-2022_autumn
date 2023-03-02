function filterMaxStr(str) {
  let len = str.length;
  // console.log(len);
  if (len <= 1) return len;
  let cur = 0;
  let res = "";
  let arr = [];
  let hashMap = new Map();
  while (cur < len) {
    if (!hashMap.has(str[cur])) {
      hashMap.set(str[cur], cur);
      res += str[cur];
      cur++;
    } else {
      cur = hashMap.get(str[cur]) + 1;
      hashMap.clear();
      arr.push(res);
      res = "";
    }
    if (cur === len) {
      arr.push(res);
    }
  }
  res = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > res.length) res = arr[i];
  }
  return res;
}

filterMaxStr("qwertezxc");
