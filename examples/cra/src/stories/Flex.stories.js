import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

import { ThemeProvider, CSSReset, Box, Flex as FlexComp } from '@evilfactory/anggun-core'

export default {
  title: 'Flex',
  decorators: [withKnobs, withA11y]
}

export const Flex = () => {
  return (
    <ThemeProvider>
      <CSSReset />

      <FlexComp justifyContent='center'>
        <Box bg='success'>Flex</Box>
        <Box bg='success'>Flex</Box>
        <Box bg='success'>Flex</Box>
        <Box bg='success'>Flex</Box>
      </FlexComp>
    </ThemeProvider>
  )
}
