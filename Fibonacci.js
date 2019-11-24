function fibonacci(num){
  if(!num){
    return 0;
  }

  if(num === 1){
    return 1;
  }

  return fibonacci(num-1) + fibonacci(num-2);
}
