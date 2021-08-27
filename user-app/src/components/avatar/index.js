import "./styles.scss"

class Avatar {
  render(name) {
    const body = document.querySelector('body')
    
    const circle = document.createElement('div')
    const names = name.split(' ')
    const fname = names[0]
    const lname = names[1]
    circle.innerHTML = fname[0].toUpperCase() + lname[0].toUpperCase()
    circle.classList.add('avatar')

    body.appendChild(circle)
  }
}

export default Avatar
