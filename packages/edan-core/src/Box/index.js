import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
/*
 * @see {https://styled-system.com/api}
 */
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system'

const composeStyles = compose(
  space,
  color,
  typography,
  flexbox,
  grid,
  background,
  position,
  shadow,
  border,
  layout
)

const Box = styled('div', { shouldForwardProp })(composeStyles, {
  boxSizing: 'border-box',
  minWidth: 0
})

Box.displayName = 'Box'

export default Box
