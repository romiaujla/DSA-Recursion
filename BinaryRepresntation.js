function numToBinary (num, binaryNum = '') {
  if (num === 0){
    return binaryNum;
  }

  binaryNum = (num % 2).toString() + binaryNum;

  return numToBinary(Math.floor(num / 2), binaryNum);
}

console.log(numToBinary(122));
