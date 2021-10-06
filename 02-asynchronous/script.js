async function getUsers() {
  // Code here
  const url = "https://randomuser.me/api/?results=2"
  let response = await fetch(url)
  let result = await response.json()
  return result.results
}


async function renderUsers() {
  // Code here
  let users = await getUsers()
  console.log(users)
  let container = document.querySelector(".container")
  users.map(user => {
    let div = document.createElement("div")
    div.classList.add('user')
    container.appendChild(div)

    let img = document.createElement("img")
    img.setAttribute('src', user.picture.thumbnail)
    div.appendChild(img)

    let h2 = document.createElement("h2")
    h2.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last}`
    div.appendChild(h2)

    let a = document.createElement("a")
    a.innerHTML = user.email
    div.appendChild(a)
  })
}

renderUsers();
