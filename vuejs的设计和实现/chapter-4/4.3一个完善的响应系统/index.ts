// // 问题：没有建立准确的联系，导致不读取其他字段，对其他字段进行设置，也会导致副作用函数执行

// // 解决：优化存储副作用函数的数据结构，用weakMap代替set；

// // 优化：1. 封装依赖收集为track函数 同时 将副作用触发 为 trigger函数
// //      2. 实现对象深层次的监听

// let activeEffect: Function;
// // 副作用注册函数
// const effect = function (fn: Function) {
//   activeEffect = fn; // 闭包保存fn

//   fn();
// };

// const bucket = new WeakMap();

// function isObj(target) {
//   return target !== null && typeof target === "object";
// }
// const track = function (target, key) {
//   // 没有直接返回
//   if (!activeEffect) return;
//   let depsMap = bucket.get(target);
//   // 取不到map,就新建一个map；
//   if (!depsMap) {
//     bucket.set(target, (depsMap = new Map()));
//   }
//   let deps = depsMap.get(key);
//   // 取不到set,就新建一个set
//   if (!deps) {
//     depsMap.set(key, (deps = new Set()));
//   }
//   // 将对应的副作用函数保存
//   deps.add(activeEffect);
// };
// // 调用副作用函数
// const trigger = function (target, key) {
//   // 找不到对应map直接返回
//   const depsMap = bucket.get(target);
//   if (!depsMap) return;
//   // 找到继续找副作用集合
//   const deps = depsMap.get(key);
//   // 如果找到就依次执行副作用函数
//   if (deps) {
//     deps.forEach((fn: Function) => fn());
//   }
// };

// const data = {
//   text: "hello vue!",
//   person: {
//     name: 18,
//     tel: {
//       mobile: "12345",
//     },
//   },
// };

// const reactive = <T extends Object>(target: T) => {
//   return new Proxy(target, {
//     get(target, key, receiver) {
//       let res = Reflect.get(target, key, receiver);
//       if (activeEffect) {
//         track(target, key);

//         // 深层次监听
//         if (isObj(res)) {
//           return reactive(res);
//         }
//       }
//       return res;
//     },
//     set(target, key, value) {
//       // 需要返回一个boolean,res正好是一个boolean
//       let res = Reflect.set(target, key, value);
//       trigger(target, key);
//       return res;
//     },
//   });
// };
// const obj = reactive(data);

// effect(() => {
//   // obj.id = 111
//   console.log("111");
//   // console.log(22);
//   document.body.innerText = `${obj.text} - ${obj.person.tel.mobile}`; // get拦截成功，绑定副作用函数
// });

// setTimeout(() => {
//   // obj.text = "success";
//   obj.person.tel.mobile = 'hahaha'
//   // obj.id = 111;
// }, 2000); // 响应式数据设置成功，在 2S 之后视图更新
