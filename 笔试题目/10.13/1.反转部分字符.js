// let str = readline();
let str = "lalaladmxy z m";
function reverse(str) {
  let strArr = str.trim().split(" ");
  let arr = strArr[0].split("");
  let len = strArr[0].length;
  if (len < 2) return strArr[0];
  let begin = arr.indexOf(strArr[1]) === -1 ? 0 : arr.indexOf(strArr[1]);
  let end = arr.indexOf(strArr[2]) === -1 ? len - 1 : arr.indexOf(strArr[2]);
  // 双指针
  while (begin < end) {
    [arr[begin], arr[end]] = [arr[end], arr[begin]];
    begin++;
    end--;
  }
  return arr.join("");
}

console.log(reverse(str));
