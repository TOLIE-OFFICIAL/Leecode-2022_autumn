var deepClone1 = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};

var deepClone2 = function (obj) {
  // 判断是否为数组
  const isArray = (arr) =>
    Object.prototype.toString.call(arr) === "[object Array]";
  // 判断是否为引用类型
  // typeof function(){} 是 function
  // typeof {} 是 object
  // typeof [] 是 object
  // typeof null 也是 object
  // 这里是不为null 且 为array 或者 为object 或者 为function
  const isObject = (obj) =>
    obj != null && (typeof obj === "object" || typeof obj === "function");

  // 递归思路实现拷贝
  const copy = (item) => {
    // 不是引用类型 或者 是函数
    if (typeof item === "function" || !isObject(item)) return item;
    // 是数组就新建数组，否则新建对象
    const res = isArray(item) ? [] : {};
    // 遍历
    for (let key in item) {
      // 如果有这个属性
      if (item.hasOwnProperty(key)) {
        // 取到这个属性值
        const value = item[key];
        res[key] = copy(value);
      }
    }
    // 返回拷贝的结果
    return res;
  };
  return copy(obj);
};

console.log(
  deepClone2({
    a: 1,
    b: {
      c: 4,
      d: 5,
    },
  })
);
// let obj = { a: 1 };
// console.log(obj.a);
// console.log(Object.prototype.toString.call(obj);
