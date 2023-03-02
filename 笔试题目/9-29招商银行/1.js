process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";
var input_array = "";

process.stdin.on("data", function (data) {
  input += data;
});

process.stdin.on("end", function () {
  input_array = input.split("\n");
  var nLine = 0;

  while (nLine < input_array.length) {
    var line = input_array[nLine++].trim();
    if (line === "") {
      continue;
    }
    var input_arrays = line.split(" ");
    var total = +input_arrays[0];
    var cur = +input_arrays[1];
    let res = -Infinity;
    if (cur >= total) {
      console.log(cur - total);
      return;
    }
    let set = new Set();
    for(let i = 1;i<10;i++){
      if(total % i===0){
        set.add(i);
        set.add(total/i);
      }
    }
    for(let item of set){
      console.log(res);
      res = Math.min(Math.abs(cur - item),res)
    }
    console.log(res);
  }
});


let set = new Set();
set.add(1);
set.add(2);
console.log(set);

// process.stdin.resume();
// process.stdin.setEncoding("ascii");

// var input = "";
// var input_array = "";

// process.stdin.on("data", function (data) {
//   input += data;
// });

// process.stdin.on("end", function () {
//   input_array = input.split("\n");
//   var nLine = 0;

//   while (nLine < input_array.length) {
//     var line = input_array[nLine++].trim();
//     if (line === "") {
//       continue;
//     }
//     var input_arrays = line.split(" ");
//     var total = +input_arrays[0];
//     var cur = +input_arrays[1];
//     var res = 0;
//     var temp = cur;
//     if (cur > total) {
//       console.log(cur - total);
//       return;
//     }
//     while (total % cur !== 0) {
//       cur++;
//     }
//     res = cur - temp;
//     cur = temp;
//     while (total % cur !== 0) {
//       cur--;
//     }
//     res = Math.min(res, temp - res);
//     console.log(res);
//   }
// });
