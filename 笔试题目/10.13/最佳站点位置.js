// let str = readline();
let str = "A1 B1 3|B1 A1 1|B1 C1 4|A1 C1 5|C1 B1 9";
let arr = str.split("|").map((item) => {
  const [from, to, weight] = item.split(" ");
  return {
    from,
    to,
    weight: parseFloat(weight),
  };
});
console.log(arr);
