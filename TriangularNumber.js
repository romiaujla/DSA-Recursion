function triangularNumber(num) {
  if (num === 1) {
    return num;
  }
  if(num < 0) {
    return;
  }
  return num + triangularNumber(num - 1)
}
console.log(triangularNumber(4));
