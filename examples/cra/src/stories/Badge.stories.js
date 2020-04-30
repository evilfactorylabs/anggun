import React from 'react'
import { ThemeProvider, CSSReset, Badge as BadgeComp, Spacer } from '@evilfactory/anggun-core'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Badge',
  decorators: [withKnobs, withA11y]
}

export const Badge = () => {
  return (
    <ThemeProvider>
      <CSSReset />

      <BadgeComp primary>Primary</BadgeComp>
      <Spacer x={1} />

      <BadgeComp warning>Warning</BadgeComp>
      <Spacer x={1} />

      <BadgeComp success>Success</BadgeComp>
      <Spacer x={1} />

      <BadgeComp danger>Danger</BadgeComp>
      <Spacer x={1} />
    </ThemeProvider>
  )
}
