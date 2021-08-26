const generatePalette = (steps) => {
  const palette = []

  let first
  let last
  let middle
  for (let index = 1; index < steps; index += 1) {
    first = document.createElement('div')
    first.classList.add(`mix-light-${index}`)
    first.innerHTML = `light-${index}`

    last = document.createElement('div')
    last.classList.add(`mix-dark-${index}`)
    last.innerHTML = `dark-${index}`

    palette.unshift(first)
    palette.push(last)
  }

    middle = document.createElement('div')
    middle.setAttribute('id', 'base')
    middle.innerHTML = 'base'

  palette.splice(palette.length / 2, 0, middle)
  return palette
}

export default generatePalette
