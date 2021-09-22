const rand = (min = null, max = null) => {
  if(min === null && max === null) {
    return 0
  }
  else {
    if(max == null) {
      max = min
      min = 0
    }
    return Math.floor(Math.random() * max) + min
  }

}

console.log(rand(20,1))
console.log(rand(1,10))
console.log(rand(6))
console.log(rand())