import React from 'react'
import {
  ThemeProvider,
  Box as BoxComponent,
  Button as ButtonComp,
  Spacer as SpacerComp
} from '@evilfactory/anggun-core'
import { withKnobs, number } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Spacer',
  decorators: [withKnobs, withA11y]
}

export const SpacerY = () => (
  <ThemeProvider>
    <BoxComponent as='div' color='white' bg='success' p={2}>
      Box
    </BoxComponent>

    <SpacerComp y={number('y1', 3)} />

    <BoxComponent as='div' color='white' bg='success' p={2}>
      Box
    </BoxComponent>

    <SpacerComp y={number('y2', 4)} />

    <BoxComponent as='div' color='white' bg='success' p={2}>
      Box
    </BoxComponent>
  </ThemeProvider>
)

export const SpacerX = () => (
  <ThemeProvider>
    <ButtonComp bg='warning'>Button</ButtonComp>

    <SpacerComp x={number('x1', 3)} />

    <ButtonComp bg='warning'>Button</ButtonComp>

    <SpacerComp x={number('x2', 4)} />

    <ButtonComp bg='warning'>Button</ButtonComp>
  </ThemeProvider>
)
