function stringSplitter(str, separator) {
  if(!separator) {
      return [str];
    }
  if(!str) {
    return [];
  }
  for(i = 0; i < str.length; i++) {
    if(str[i] === separator) {
      return [str.slice(0, i), ...stringSplitter(str.slice(i + 1), separator)]
    }
    if(str.length - 1 === i) {
      return [str];
    }
  }
}
console.log(stringSplitter('02/30/2020', '/'));
