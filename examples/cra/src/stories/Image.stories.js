import React from 'react'
import { ThemeProvider, CSSReset, Image as ImageComp } from '@evilfactory/anggun'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Image',
  decorators: [withKnobs, withA11y]
}

export const Image = () => {
  return (
    <ThemeProvider>
      <CSSReset />

      <ImageComp
        src={text(
          'src',
          'https://avatars0.githubusercontent.com/u/31406355?s=400&u=d0dd7eb41508b44a3ab7232e4056e04043a9b3b0&v=4'
        )}
        alt={text('alt', 'kevanantha')}
        nativeheight={text('nativeheight', '100px')}
        nativewidth={text('nativewidth', '100px')}
      />
    </ThemeProvider>
  )
}
