class Header {
  render(title) {
    const body = document.querySelector('body')
    
    const heading = document.createElement('h2')
    heading.innerHTML = title

    body.appendChild(heading)
  }
}

export default Header
