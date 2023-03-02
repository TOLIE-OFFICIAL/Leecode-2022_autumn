var plusOne = function (digits) {
  let length = digits.length;
  let i = length - 1;
  while (i >= 0) {
    if (digits[i] == 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      return digits;
    }
    i--;
  }
  digits.unshift(1);
  return digits;
};
