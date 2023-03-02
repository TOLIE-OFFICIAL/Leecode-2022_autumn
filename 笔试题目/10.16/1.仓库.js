function getNum(str) {
  return str.split(" ").map((item) => Number(item));
}
const [kinds, orderNum] = getNum(readline());
// const [kinds, orderNum] = [3,4];

const store = getNum(readline());
// const store = [2,3,2]
while (orderNum) {
  let cur = getNum(readline());
  // let cur = [1,2];
  if (store[cur[0]] >= cur[1]) {
    store[cur[0]] -= cur[1];
    console.log(`item #${cur[0]}: Success!`);
  } else {
    console.log(`item #${cur[0]}: Sorry!`);
  }
  orderNum--;
}

// item #1: Success!
// item #2: Sorry!

// 3 4
// 2 3 2
// 1 2
// 2 4
// 3 1
// 1 1
