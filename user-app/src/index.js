import Avatar from './components/avatar'

const avatar = new Avatar()
avatar.render('James Smith')

import('UIApp/Palette').then(PaletteModule => {
  const Palette = PaletteModule.default
  const palette = new Palette()
  palette.render(7)
})