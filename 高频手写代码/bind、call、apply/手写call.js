Function.prototype.myCall = function (target, ...args) {
  // javascript要求，当我们target传入的是一个非真值的对象时，target指向window
  target = target || window;//如果 前者 能被转换为 true，那么返回 前者；否则，返回 后者
  let symbol = Symbol();
  target[symbol] = this;
  const res = target[symbol](...args);
  delete target[symbol];
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

person.say.myCall(people, 19, "girl");
