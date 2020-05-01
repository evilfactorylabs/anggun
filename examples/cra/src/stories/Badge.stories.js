import React from 'react'
import { ThemeProvider, CSSReset, Badge as BadgeComp, Spacer } from '@evilfactory/anggun-core'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Badge',
  decorators: [withKnobs, withA11y]
}

export const Badge = () => {
  const variant = ['solid', 'outline']
  const rounded = ['none', 'sm', 'md', 'lg', 'full']
  const sizes = ['small', 'medium', 'large']
  return (
    <ThemeProvider>
      <CSSReset />

      <BadgeComp
        primary
        rounded={select('rounded', rounded, rounded[1])}
        color={text('color', '#FFFFFF')}
        size={select('size', sizes, sizes[1])}
        variant={select('variant', variant, variant[0])}
      >
        Primary
      </BadgeComp>
      <Spacer x={1} />

      <BadgeComp
        warning
        rounded={select('rounded', rounded, rounded[1])}
        color={text('color', '#FFFFFF')}
        size={select('size', sizes, sizes[1])}
        variant={select('variant', variant, variant[0])}
      >
        Warning
      </BadgeComp>
      <Spacer x={1} />

      <BadgeComp
        success
        rounded={select('rounded', rounded, rounded[1])}
        color={text('color', '#FFFFFF')}
        size={select('size', sizes, sizes[1])}
        variant={select('variant', variant, variant[0])}
      >
        Success
      </BadgeComp>
      <Spacer x={1} />

      <BadgeComp
        danger
        rounded={select('rounded', rounded, rounded[1])}
        color={text('color', '#FFFFFF')}
        size={select('size', sizes, sizes[1])}
        variant={select('variant', variant, variant[0])}
      >
        Danger
      </BadgeComp>
      <Spacer x={1} />
    </ThemeProvider>
  )
}
