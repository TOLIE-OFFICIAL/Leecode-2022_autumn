function reverseString( s ) {
  let len = s.length;
  if(len<=1) return s;
  let left = 0;
  let right = len - 1;
  while(left<right){
      [s[left],s[right]]=[s[right],s[left]];
      left++;
      right--;
  }
  console.log(s)
}
reverseString(['a','b','c','d'])