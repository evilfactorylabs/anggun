import React from 'react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider, Box as BoxComponent } from '@evilfactory/anggun-core'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Button',
  component: BoxComponent,
  decorators: [withKnobs, withA11y]
}

export const Text = () => <BoxComponent onClick={action('clicked')}>Hello Button</BoxComponent>

export const Box = () => (
  <ThemeProvider>
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
      I am the box
    </BoxComponent>
  </ThemeProvider>
)
