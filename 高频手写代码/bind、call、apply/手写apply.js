// 第一个参数是要使用方法的对象，第二个是传入方法的参数数组
Function.prototype.myApply = function (target, args) {
  // javascript要求，当我们target传入的是一个非真值的对象时，target指向window
  target = target || window; //如果 前者 能被转换为 true，那么返回 前者；否则，返回 后者
  let symbol = Symbol();
  target[symbol] = this; // 挂载函数到传入的对象？？？
  // console.log(this); // 函数say
  if (!Array.isArray(args)) {
    throw new Error("第二个参数必须是数组");
  }
  const res = target[symbol](...args); //执行对象的方法
  delete target[symbol]; // 删除对象的方法
  return res;
};

const person = {
  name: "tolie",
  say(age, sex) {
    console.log(`my name is ${this.name},i am a ${age} years old ${sex}`);
  },
};
person.say(18, "boy");

const people = {
  name: "lee",
};

person.say.myApply(people, [19, "girl"]);
