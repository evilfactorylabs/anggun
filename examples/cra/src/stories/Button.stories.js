import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  ThemeProvider,
  CSSReset,
  Box as BoxComponent,
  Button as ButtonComp
} from '@evilfactory/anggun-core'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Button',
  component: BoxComponent,
  decorators: [withKnobs, withA11y]
}

export const Text = () => <BoxComponent onClick={action('clicked')}>Hello Button</BoxComponent>

export const Box = () => (
  <ThemeProvider>
    <CSSReset />
    <BoxComponent
      rounded={text('rounded', 'md')}
      border={text('border', '1px solid black')}
      as={text('as', 'div')}
      color={text('color', 'white')}
      bg={text('bg', '#FF5656')}
      my={number('my', 2)}
      py={number('py', 2)}
      px={number('px', 2)}
      p={number('p', 2)}
    >
      Box
    </BoxComponent>
  </ThemeProvider>
)

export const Button = () => {
  const variants = ['solid', 'outline']
  const rounded = ['none', 'sm', 'md', 'lg', 'full']
  const sizes = ['small', 'medium', 'large']
  const colors = ['white', 'warning', 'success', 'primary', 'danger']
  return (
    <ThemeProvider>
      <ButtonComp
        rounded={select('rounded', rounded, rounded[1])}
        color={text('color', '#FFFFFF')}
        bg={select('bg', colors, colors[1])}
        size={select('size', sizes, sizes[1])}
        variant={select('variant', variants, variants[0])}
      >
        Button
      </ButtonComp>
    </ThemeProvider>
  )
}
