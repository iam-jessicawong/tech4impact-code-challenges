const chooseDecimals = (n, d) => {
  if((typeof n !== "number") || (typeof d !== "number")) {
    return false
  }
  else {
    n  = parseFloat(n) || 0
    return n.toFixed(d)
  }
}

console.log(chooseDecimals("2.100212", 2));
console.log(chooseDecimals(2.100212, 3));
console.log(chooseDecimals(2100, 2));