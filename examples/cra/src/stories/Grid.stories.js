import React from 'react'

import { ThemeProvider, CSSReset, Box, Grid as GridComp } from '@evilfactory/anggun'
import { withKnobs, select, number } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Grid',
  decorators: [withKnobs, withA11y]
}

export const Grid = () => {
  const autoFlows = ['row', 'column']
  return (
    <ThemeProvider>
      <CSSReset />

      <GridComp gap={number('gap', 1)} autoFlow={select('autoFlow', autoFlows, autoFlows[1])}>
        <Box bg='warning'>Grid</Box>
        <Box bg='warning'>Grid</Box>
        <Box bg='warning'>Grid</Box>
        <Box bg='warning'>Grid</Box>
        <Box bg='warning'>Grid</Box>
      </GridComp>
    </ThemeProvider>
  )
}
