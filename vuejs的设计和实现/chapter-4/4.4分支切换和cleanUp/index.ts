// 问题：减少不必要的副作用函数执行

// 解决：在副作用函数执行前清除其他的属性 与 此副作用函数的依赖
//      函数执行，并重新建立新得依赖关系

// 所谓的切换分支，是相对这里weakMap的 树型结构 而言的。是从某一个属性的分支 到 切换到另一个属性的分支

let activeEffect;
// 副作用注册函数
function effect(fn: Function) {
  const effectFn = () => {
    console.log("副作用函数effectFn执行");

    // 调用 cleanup 函数完成清除工作
    cleanup(effectFn);
    activeEffect = effectFn; // 闭包保存fn
    fn();
  };
  // activeEffect.deps 用来存储所有与该副作用函数相关联的依赖集合
  effectFn.deps = [];
  // console.log(effectFn);
  // console.log(effectFn.deps,"副作用函数 相关的 依赖集合");

  effectFn();
}

const bucket = new WeakMap();

function cleanup(effectFn) {
  for (let item of effectFn.deps) {
    // console.log(item);
    item.delete(effectFn);
  }
  // 最后需要重置 effectFn.deps 数组，
  // 清除用来存储所有与该副作用函数相关联的依赖集合，再重新生成
  // 其实不清除也不影响结果，只是下次重新cleanup的时候会有性能消耗
  effectFn.deps.length = 0;
}
function isObj(target) {
  return target !== null && typeof target === "object";
}
const track = function (target, key) {
  console.log("track执行");

  // 没有直接返回
  if (!activeEffect) return;
  let depsMap = bucket.get(target);
  // 取不到map,就新建一个map；
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()));
  }
  let deps = depsMap.get(key);
  // 取不到set,就新建一个set
  if (!deps) {
    depsMap.set(key, (deps = new Set()));
  }
  // 将对应的副作用函数保存
  deps.add(activeEffect);
  activeEffect.deps.push(deps);
  console.log(activeEffect.deps, "track函数里");
};

// 调用副作用函数
const trigger = function (target, key) {
  console.log("trigger执行");

  // 找不到对应map直接返回
  const depsMap = bucket.get(target);
  if (!depsMap) return;
  // 找到继续找副作用集合
  const deps = depsMap.get(key);
  // 如果找到就依次执行副作用函数
  if (deps) {
    const effectsToRun: any = new Set(deps);
    effectsToRun.forEach((fn) => fn());
  }
};

const data = {
  text: "hello vue!",
  ok: true,
  person: {
    name: 18,
    tel: {
      mobile: "12345",
    },
  },
};

const reactive = <T extends Object>(target: T) => {
  return new Proxy(target, {
    get(target, key, receiver) {
      let res = Reflect.get(target, key, receiver);
      if (activeEffect) {
        track(target, key);

        // 深层次监听
        if (isObj(res)) {
          return reactive(res);
        }
      }
      return res;
    },
    set(target, key, value) {
      // 需要返回一个boolean,res正好是一个boolean
      let res = Reflect.set(target, key, value);
      trigger(target, key);
      return res;
    },
  });
};
const obj = reactive(data);

effect(() => {
  // obj.id = 111
  console.log("副作用函数fn执行");
  // console.log(22);
  // document.body.innerText = `${obj.text} - ${obj.person.tel.mobile}`; // get拦截成功，绑定副作用函数
  document.body.innerText = obj.ok ? obj.text : "花Q"; // get拦截成功，绑定副作用函数
});

setTimeout(() => {
  // obj.text = "success";
  obj.ok = false;
  // obj.person.tel.mobile = "hahaha";
  // obj.id = 111;
  setTimeout(() => {
    obj.text = "success"; // 副作用函数就不再会执行了
  }, 2000);
}, 2000); // 响应式数据设置成功，在 2S 之后视图更新
