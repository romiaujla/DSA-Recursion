function fibonacci(num){
  if(!num){
    return 0;
  }

  if(num === 1){
    return 1;
  }

  return fibonacci(num-1) + fibonacci(num-2);
}



console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(10));
