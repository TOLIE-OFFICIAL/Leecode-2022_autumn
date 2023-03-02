var commonFactors = function (a, b) {
  let res = 0;
  for (let i = 1; i < 10; i++) {
    if (a % i === 0 && b % i === 0) res++;
  }
  return res;
};
