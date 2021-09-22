const firstNameOnly = fullName => {
  let name = fullName.split(' ')
  let initial = name[0]
  for(i=1; i<name.length; i++) {
    initial = initial.concat(' ',name[i].charAt(0), '.')
  }
  return initial
}

console.log(firstNameOnly("David Winalda"))