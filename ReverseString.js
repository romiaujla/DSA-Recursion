function reverseString(str){
  //base case
  if (!str.length){
    return ''
  }
  return str[str.length-1] + reverseString(str.slice(0,str.length-1))
}
console.log(reverseString(''))
