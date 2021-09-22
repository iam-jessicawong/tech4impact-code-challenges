const is_blank = str => {
  if(str.length>0){
    return true
  }
  else {
    return false
  }
}

console.log(is_blank(''))
console.log(is_blank('abc'))