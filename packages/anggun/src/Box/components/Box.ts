import shouldForwardProp from '@styled-system/should-forward-prop'
import styled from '@emotion/styled'
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system'
import extraConfig from '../config'

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

const composeStyles = compose(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  extraConfig
)

const Box = styled('div', { shouldForwardProp })(composeStyles)

Box.displayName = 'Box'

export default Box
