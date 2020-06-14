import colors from './colors'
import typography from './typography'
import radii from './sizes'

// const sizes = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

const sizes = [
  '0',
  '0.25rem',
  '0.5rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '1.75rem',
  '2rem',
  '2.25rem',
  '2.5rem',
  '2.75rem',
  '3rem',
  '3.25rem',
  '3.5rem',
  '3.75rem',
  '4rem',
  '100px',
  '150px',
  '200px'
]
// sizes.small = sizes[sizes.length - 3]
// sizes.medium = sizes[sizes.length - 2]
// sizes.large = sizes[sizes.length - 1]

const space = [0, 4, 8, 10, 16, 20, 32, 64, 128, 256, 512]

// const breakpoints = [] // TODO  define type breakpoints size  (e.g: xl, xxl, xyz)
const breakpoints = ['40em', '52em', '64em']

const theme = {
  sizes,
  space,
  colors,
  breakpoints,
  radii,
  ...typography
}

export default theme
