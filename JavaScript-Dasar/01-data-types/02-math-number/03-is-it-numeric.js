const isItNumeric = input => !isNaN(input)

console.log(isItNumeric(12))
console.log(isItNumeric('abcd'))
console.log(isItNumeric('12'))
console.log(isItNumeric(' '))
console.log(isItNumeric(1.20))
console.log(isItNumeric(-200))