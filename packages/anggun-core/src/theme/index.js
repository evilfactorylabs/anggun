import colors from './colors'
import typography from './typography'
import radii from './sizes'

const space = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
const breakpoints = [] // TODO  define type breakpoints size  (e.g: xl, xxl, xyz)

const theme = {
  space,
  colors,
  breakpoints,
  radii,
  ...typography
}

export default theme
