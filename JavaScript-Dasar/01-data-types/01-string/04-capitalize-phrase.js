function capitalize(statement) {
  statement = statement.toLowerCase()
  return statement.charAt(0).toUpperCase() + statement.slice(1, statement.length)
}

console.log(capitalize('javascript adalah sebuah bahasa pemrograman yang sangat powerful'))