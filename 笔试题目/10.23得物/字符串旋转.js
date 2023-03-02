function solve(A, B) {
  let a_len = A.length;
  let b_len = B.length;
  if (A === B) return true;
  if (a_len !== b_len) return false;
  let index = A.indexOf(B[0], 0);
  while (index !== -1) {
    let temp = getStr(A, index);
    if (temp === B) return true;
    else {
      index = A.indexOf(B[0], index + 1);
    }
    // console.log(cur);
  }
  return false;
}

const getStr = (str, index) => str.slice(index) + str.slice(0, index);

console.log(solve("youzan", "zanyou"));
