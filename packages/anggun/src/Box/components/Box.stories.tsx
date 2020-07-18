import React from 'react'
import Box from './Box'
import { withA11y } from '@storybook/addon-a11y'
import { ProviderWrapper } from '../../utils/storybook'

export default {
  title: 'Badge',
  decorators: [withA11y, ProviderWrapper]
}

export const BasicBox = () => <Box>hello box</Box>
