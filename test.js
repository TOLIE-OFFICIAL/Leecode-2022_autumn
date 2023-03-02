// function sum(a, b) {
//   return a + b;
// }

// let arr1 = [1, 2, 3];
// let arr2 = [4, 3, 4];

// console.log(sum(1,2,3));
console.log(![]==''); // true
console.log(![]); // false
console.log(!!''); //false

console.log(null==undefined); //true
console.log(null===undefined); //false

console.log(NaN==undefined);// false
console.log(NaN==null); //false
console.log(NaN==NaN); // false

console.log(Number('a')==Number('a')); // false

function test(a,...rest){
  console.log(rest);
  console.log(arguments); //类数组
}
test(1,2,3)
