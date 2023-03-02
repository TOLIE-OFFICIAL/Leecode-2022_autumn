let transTuofeng = function (str) {
  // 去除首尾的“-”
  if (str[0] === "-") str = str.slice(1);
  if (str[str.length-1] === "-") str = str.slice(0,str.length-1);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-") {
      let charactor = str[i + 1].toUpperCase();
      let fore = str.slice(0, i);
      // 越界就返回一个空字符
      let last = str.slice(i + 2);
      return fore + charactor + last;
    }
  }
};
console.log(transTuofeng('-back-ground-'))