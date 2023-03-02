Function.prototype.mybind = function (target, ...args) {
  target = target || window; //如果 前者 能被转换为 true，那么返回 前者；否则，返回 后者
  let symbol = Symbol();
  // console.log(this);
  target[symbol] = this;
  return function (...rest) {
    const res = target[symbol](...args, ...rest);
    return res;
  };
};

const person = {
  name: "tolie",
  say(...args) {
    let res = args.reduce((a, b) => a + b);
    console.log(`${this.name} + ${res}`);
  },
};
person.say(18, 2);

const people = {
  name: "lee",
};

let fn = person.say.mybind(people, 19, 20);
fn(10);
