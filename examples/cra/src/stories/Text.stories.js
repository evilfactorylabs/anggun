import React from 'react'
import { ThemeProvider, CSSReset, Text as TextComp } from '@evilfactory/anggun-core'
import { withKnobs, select } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Text',
  decorators: [withKnobs, withA11y]
}

export const Text = () => {
  const fontSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
  const as = [
    'p',
    'i',
    'u',
    'del',
    'abbr',
    'cite',
    'em',
    'ins',
    'mark',
    'kbd',
    's',
    'sub',
    'sup',
    'samp',
    'code'
  ]
  return (
    <ThemeProvider>
      <CSSReset />

      <TextComp as={select('as', as, as[0])} fontSize={select('fontSize', fontSizes, fontSizes[2])}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TextComp>
    </ThemeProvider>
  )
}
