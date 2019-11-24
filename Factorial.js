function factorial(num){
  if(!num){
    return 0;
  }
  if(num === 1){
    return num;
  }
  return num * factorial(num-1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
