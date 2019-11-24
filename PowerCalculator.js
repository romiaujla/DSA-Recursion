function powerCalculator(base, exp){
  //base case
  if(!exp){
    return 1
  }
  if(exp < 0){
    return 'Exponent should be greater or equal to 0'
  }
  return powerCalculator(base,exp-1)*base;
}
console.log(powerCalculator(10,1))
