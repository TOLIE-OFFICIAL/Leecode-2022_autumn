// const map = new Map();
// const weakmap = new WeakMap();

// const bar = { bar: 2 };

// (function () {
//   const foo = { foo: 1 };

//   map.set(foo, 1);
//   weakmap.set(bar, 2);
//   // weakmap.set('name', 2);
//   // console.log(weakmap.get(bar));
// })();

// // console.log(map.keys())
// console.log(weakmap.get(bar))

const set = new Set([1]);

const newSet = new Set(set);

// console.log(set===newSet);
newSet.forEach((item) => {
  set.delete(1);
  set.add(1);
  console.log("遍历中");
});
