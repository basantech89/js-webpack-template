import Header from './components/header'
import Palette from './components/palette'
import Typography from './components/typography'

const header = new Header()
header.render('Webpack Template')

const palette = new Palette()
palette.render(10)

const typography = new Typography()
typography.render()