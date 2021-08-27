import "./styles.scss"

class Typography {
  render() {
    const body = document.querySelector('body')
    const parent = document.createElement('div')
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')
    const h5 = document.createElement('h5')
    const h6 = document.createElement('h6')
    h1.innerHTML = 'Heading 1'
    h2.innerHTML = 'Heading 2'
    h3.innerHTML = 'Heading 3'
    h4.innerHTML = 'Heading 4'
    h5.innerHTML = 'Heading 5'
    h6.innerHTML = 'Heading 6'
    parent.appendChild(h1)
    parent.appendChild(h2)
    parent.appendChild(h3)
    parent.appendChild(h4)
    parent.appendChild(h5)
    parent.appendChild(h6)
    body.appendChild(parent)
  }
}

export default Typography
