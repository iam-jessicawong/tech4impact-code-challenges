// const isItNumeric = input => isNaN(input)
function isItNumeric(num) {
  if(isNaN(num) || num == " ") {
    return false
  }
  else {
    return true
  }
}

console.log(isItNumeric(12))
console.log(isItNumeric('abcd'))
console.log(isItNumeric('12'))
console.log(isItNumeric(' '))
console.log(isItNumeric(1.20))
console.log(isItNumeric(-200))