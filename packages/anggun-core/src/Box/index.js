import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'

import extraConfig from './config'
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
  layout,
  extraConfig
)

const Box = styled('div', { shouldForwardProp })(composeStyles, {
  minWidth: 0,
  boxSizing: 'border-box'
})

Box.displayName = 'Box'

export default Box
